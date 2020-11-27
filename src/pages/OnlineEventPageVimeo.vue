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
      >{{ onlineEvent.title }}</div>
      <div
        v-if="session_has_ended !== true"
        class="text-h5 text-grey-6 q-mb-sm"
      >{{ onlineEvent.description }}</div>
        <!-- v-show="session_has_started === true && session_has_ended === false" -->
          <!--  -->
          <!-- v-if="videoId" -->
      <div
        class="full-width"
        style="max-width: 60%"
      >
        <VimeoVideo
          ref="video"
          :video-id="videoId"
          @ready="handleVideoReady"
        />
      </div>
    </div>

    {{ currentVideoTime }}
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
      required: false
    }
  },

  data () {
    return {
      player: null,

      live_leeway: 10,

      currentVideoTime: 0,

      video_visible: false,

      session_has_started: null,

      session_has_ended: null,

      timeUntilStartHumanized: null
    }
  },

  mounted () {
    const vm = this
    setInterval(() => {
      vm.handleSessionLive()
      vm.handleSessionIsOver()
      vm.timeUntilStartHumanized = this.$dayjs().to(this.onlineEvent.start_time)
    }, 500)
  },

  methods: {
    logger (...params) {
      console.log(...params)
    },

    updateCurrentVideoTime () {
      this.player.getCurrentTime()
        .then(seconds => {
          this.currentVideoTime = seconds
        })
    },

    handleVideoReady (player) {
      this.player = player
      this.player.play()
      const vm = this

      vm.setVideoInitialPlayTime()

      setInterval(() => {
        vm.updateCurrentVideoTime()
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
        this.player.setCurrentTime(this.getTimeSinceStart())
      }
    },

    handleVideoOutOfPlayTime () {
      if (this.getSessionHasNotStarted() || this.getSessionIsOver()) {
        return
      }

      if (this.getVideoIsOutOfLeeway()) {
        this.player.setCurrentTime(this.getTimeSinceStart())
      }
    },

    playVideoIfPaused () {
      this.player.play()
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
    }
  }
}
</script>
