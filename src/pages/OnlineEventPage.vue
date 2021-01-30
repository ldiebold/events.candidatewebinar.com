<template>
  <q-page padding>
    <div
      class="column items-center"
      v-if="onlineEvent"
    >
      <q-banner
        class="bg-blue text-white full-width q-mb-lg"
        v-if="session_has_started === false && session_has_ended === false"
      >
        Session will start {{ timeUntilStartHumanized }}
      </q-banner>

      <q-banner
        class="bg-grey-8 text-white full-width q-mb-lg"
        v-if="session_has_ended === true"
      >
        Session has Ended
      </q-banner>

      <div
        v-if="session_has_ended !== true"
        class="text-h2 text-grey-8"
      >
        {{ onlineEvent.title }}
      </div>
      <div
        v-if="session_has_ended !== true"
        class="text-h5 text-grey-6 q-mb-sm"
      >
        {{ onlineEvent.description }}
      </div>

      <div
        class="full-width"
        style="max-width: 60%"
        v-show="session_has_started === true && session_has_ended === false"
      >
        <WistiaVideo
          @ready="handleVideoReady"
          ref="video"
          v-if="videoId"
          :video-id="videoId"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
import WistiaVideo from 'components/WistiaVideo.vue'
import dayjs from 'dayjs'

import urlParser from 'js-video-url-parser/lib/base'
import 'js-video-url-parser/lib/provider/wistia'

var relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)

export default {
  name: 'OnlineEventPage',

  components: {
    WistiaVideo
  },

  props: {
    onlineEventCandidate: {
      required: false,
      type: [Object, Boolean],
      default: false
    }
  },

  data () {
    return {
      live_leeway: 10,

      video_visible: false,

      session_has_started: null,

      session_has_ended: null,

      timeUntilStartHumanized: null
    }
  },

  mounted () {
    // this.joinPresenceChannel()

    const vm = this
    setInterval(() => {
      vm.handleSessionLive()
      vm.handleSessionIsOver()
      vm.timeUntilStartHumanized = this.$dayjs().to(this.onlineEvent.start_time)
    }, 500)
  },

  methods: {
    handleVideoReady () {
      // vm.$refs.video.exec('play')
      const vm = this

      vm.setVideoInitialPlayTime()

      setInterval(() => {
        vm.handleVideoOutOfPlayTime()
        vm.playVideoIfPaused()
      }, 500)
    },

    getSessionIsOver () {
      return Math.sign(dayjs(this.onlineEvent.end_time).diff(new Date(), 'seconds')) === -1
    },

    handleSessionIsOver () {
      this.session_has_ended = this.getSessionIsOver()
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
      if (this.getSessionIsLive()) {
        this.$refs.video.exec('time', this.getTimeSinceStart())
      }
    },

    handleVideoOutOfPlayTime () {
      if (this.getSessionHasNotStarted() || this.getSessionIsOver()) {
        return
      }

      if (this.getVideoIsOutOfLeeway()) {
        this.$refs.video.exec('time', this.getTimeSinceStart())
      }
    },

    playVideoIfPaused () {
      this.$refs.video.exec('play')
    },

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
      const currentVideoTime = this.$refs.video.exec('time')
      const pastLeeway = currentVideoTime > this.getStartTimePlusLeeway()
      const behindLeeway = currentVideoTime < this.getStartTimeMinusLeeway()

      return pastLeeway || behindLeeway
    },

    joinPresenceChannel () {
      console.log('joining')
      this.$echo.join(`App.Models.User.${this.user.upline_id}.Online.Event.${this.online_event_id}`)
        .here((data) => {
          this.$MUser.insertOrUpdate({ data })
        })
        .joining((data) => {
          this.$MUser.insert({ data })
        })
        .leaving((data) => {
          this.$MUser.delete(data.id)
        })
        .listen('NewMessage', (e) => {
          console.log('message', e)
        })
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
