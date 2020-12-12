<template>
  <OnlineEventPage
    v-if="closest_online_event"
    :online-event-candidate="closest_online_event"
  />

  <div v-else />
</template>

<script>
import OnlineEventPage from 'pages/OnlineEventPage.vue'

export default {
  name: 'PageIndex',

  data () {
    return {
      user: null
    }
  },

  mounted () {
    setTimeout(() => {
      console.log('call it')
      this.$echo.join('online')
        .here(() => {
          console.log('here')
        })
        .joining(() => {
          console.log('joining')
        })
        .leaving(() => {
          console.log('leaving')
        })
        .listen('NewMessage', (e) => {
          console.log('New Message')
        })
    }, 3000)
  },

  components: {
    OnlineEventPage
  },

  computed: {
    closest_online_event () {
      return this.onlineEventsOrdered[0]
    },

    onlineEventsOrdered () {
      return this.$MOnlineEvent.all().sort(function (a, b) {
        return new Date(a.start_time) - new Date(b.start_time)
      })
    }
  },

  methods: {

  }
}
</script>
