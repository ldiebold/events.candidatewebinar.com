<template>
  <q-page padding>
    <div
      class="column items-center"
      v-if="onlineEvent"
    >
      <div
        class="text-h2 text-grey-8"
      >
        {{ onlineEvent.title }}
      </div>
      <div
        class="text-h5 text-grey-6 q-mb-sm"
      >
        {{ onlineEvent.description }}
      </div>

      <q-banner
        class="bg-blue text-white full-width text-center q-mb-lg q-mt-lg"
        v-if="session_has_started === false && session_has_ended === false"
      >
        Session will start {{ timeUntilStartHumanized }}
      </q-banner>

      <q-banner
        class="bg-grey-8 text-white text-center full-width q-mb-lg q-mt-lg"
        v-if="session_has_ended === true"
      >
        Session has Ended
      </q-banner>

      <!-- Video -->
      <div
        class="full-width"
        style="max-width: 80%"
        v-if="session_has_started === true && session_has_ended === false"
      >
        <VimeoVideo
          ref="video"
          :video-id="videoId"
          v-if="videoId"
          @ready="handleVideoReady"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
import VimeoVideo from 'components/VimeoVideo.vue'
import dayjs from 'dayjs'

import urlParser from 'js-video-url-parser/lib/base'
import 'js-video-url-parser/lib/provider/vimeo'

var relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)

export default {
  name: 'EventPage',

  components: {
    VimeoVideo
  },

  props: {
    onlineEventCandidate: {
      required: false,
      type: [Object, Boolean],
      default: false
    }
  },

  watch: {
    '$route.params.online_event_id' (newOnlineEventId, oldOnlineEventId) {
      const userIdForChannel = this.user.role === 'candidate'
        ? this.user.upline_id : this.user.id

      this.$echo.leave(`App.Models.User.${userIdForChannel}.Online.Event.${oldOnlineEventId}`)

      this.clearIntervals()

      this.startObservations()
    }
  },

  data () {
    return {
      videoStatusIntervals: null,

      sessionTrackingIntervals: null,

      duration: null,

      player: null,

      live_leeway: 10,

      currentVideoTime: 0,

      video_visible: false,

      session_has_started: false,

      session_has_ended: false,

      timeUntilStartHumanized: null
    }
  },

  mounted () {
    this.$MUser.$getCandidates()
    this.startObservations()
  },

  methods: {
    startObservations () {
      this.joinPresenceChannel()

      const vm = this
      this.sessionTrackingIntervals = setInterval(() => {
        vm.handleSessionLive()
        vm.handleSessionIsOver()
        vm.timeUntilStartHumanized = this.$dayjs().to(this.onlineEvent.start_time)
      }, 500)
    },

    joinPresenceChannel () {
      this.$MUser.update({
        where: () => true,
        data: { inOnlineEvent: false }
      })

      const userIdForChannel = this.user.role === 'candidate'
        ? this.user.upline_id : this.user.id

      this.$echo.join(`App.Models.User.${userIdForChannel}.Online.Event.${this.onlineEvent.id}`)
        .here((data) => {
          this.$MUser.insertOrUpdate({ data })
        })
        .joining((data) => {
          this.$MUser.insertOrUpdate({ data })
        })
        .leaving((data) => {
          this.$MUser.update({
            where: data.id,
            data: { inOnlineEvent: false }
          })
        })
        .listen('NewMessage', (e) => {
        })
    },

    logger (...params) {
      console.log(...params)
    },

    handleVideoEnded () {
      this.session_has_ended = true
    },

    updateCurrentVideoTime () {
      this.$refs.video.getPlayer().getCurrentTime()
        .then(seconds => {
          this.currentVideoTime = seconds
        })
    },

    handleVideoReady (player) {
      player.getDuration()
        .then(this.handleGotDuration)
        .then(duration => {
          this.$refs.video.getPlayer().on('play', data => {
            this.duration = data.duration
          })

          this.$refs.video.getPlayer().on('end', data => {
            this.handleVideoEnded()
          })

          this.$refs.video.getPlayer().on('pause', data => {
            this.$refs.video.getPlayer().play()
          })

          this.$refs.video.getPlayer().play()
          const vm = this

          vm.setVideoInitialPlayTime()

          this.videoStatusIntervals = setInterval(() => {
            vm.updateCurrentVideoTime()
            vm.handleVideoOutOfPlayTime()
            // vm.playVideoIfPaused()
          }, 300)
        })
    },

    handleGotDuration (duration) {
      this.duration = duration
    },

    clearIntervals () {
      clearInterval(this.videoStatusIntervals)
      clearInterval(this.sessionTrackingIntervals)
    },

    getSessionIsOver () {
      if (Math.sign(dayjs(this.onlineEvent.end_time).diff(new Date(), 'seconds')) === -1) {
        return true
      }
      if (this.duration && Math.sign(dayjs(this.onlineEvent.start_time).add(this.duration + this.live_leeway, 'second').diff(new Date(), 'seconds')) === -1) {
        return true
      }
      return false
    },

    handleSessionIsOver () {
      this.session_has_ended = this.getSessionIsOver()
      if (this.session_has_ended) {
        this.clearIntervals()
      }
    },

    handleSessionLive () {
      this.session_has_started = this.getSessionIsLive()
    },

    getSessionIsLive () {
      return this.getSessionHasStarted() &&
        (Math.sign(dayjs(this.onlineEvent.end_time).diff(new Date(), 'seconds')) === 1)
    },

    getSessionHasStarted () {
      return this.getTimeSinceStart() > 0
    },

    getMinutesUntilLive () {
      return dayjs().diff(this.onlineEvent.start_time, 'seconds')
    },

    getSessionHasNotStarted () {
      return !this.getSessionHasStarted()
    },

    setVideoInitialPlayTime () {
      if (this.duration && Math.sign(dayjs(this.onlineEvent.start_time).add(this.duration, 'second').diff(new Date(), 'seconds')) === -1) {
        this.session_has_ended = true
        return
      }

      if (this.getSessionIsLive()) {
        this.$refs.video.getPlayer().setCurrentTime(this.getTimeSinceStart())
      }
    },

    handleVideoOutOfPlayTime () {
      if (this.getSessionHasNotStarted() || this.getSessionIsOver()) {
        return
      }

      if (this.getVideoIsOutOfLeeway()) {
        if (this.$refs.video.getPlayer().setCurrentTime.getCurrentTime >= (this.duration - 1)) {
          this.session_has_ended = true
        } else {
          this.$refs.video.getPlayer().setCurrentTime(this.getTimeSinceStart())
        }
      }
    },

    // playVideoIfPaused () {
    //   this.$refs.video.getPlayer().getPaused()
    //     .then(paused => {
    //       if (paused) {
    //         console.log('playing')
    //         this.$refs.video.getPlayer().play()
    //       }
    //     })
    // },

    getTimeSinceStart () {
      const difference = dayjs(new Date()).diff(this.onlineEvent.start_time, 'second')
      return difference
    },

    getStartTimeMinusLeeway () {
      return this.getTimeSinceStart() - this.live_leeway
    },

    getStartTimePlusLeeway () {
      return this.getTimeSinceStart() + this.live_leeway
    },

    getVideoIsOutOfLeeway () {
      const pastLeeway = this.currentVideoTime > this.getStartTimePlusLeeway()
      const behindLeeway = this.currentVideoTime < this.getStartTimeMinusLeeway()

      return pastLeeway || behindLeeway
    }
  },

  computed: {
    onlineEvent () {
      return this.onlineEventCandidate ? this.onlineEventCandidate : this.$MOnlineEvent.find(this.$route.params.online_event_id)
    },

    videoId () {
      if (this.onlineEvent.video_url) {
        return urlParser.parse(this.onlineEvent.video_url).id
      }

      return null
    },

    user () {
      return this.$MUser.getSessionUser()
    }
  }

}
</script>
