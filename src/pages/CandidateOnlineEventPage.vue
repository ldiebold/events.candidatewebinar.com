<template>
  <OnlineEventPageVimeo
    v-if="closest_online_event"
    :online-event-candidate="closest_online_event"
  />

  <div v-else />
</template>

<script>
import OnlineEventPageVimeo from 'pages/OnlineEventPageVimeo.vue'

export default {
  name: 'PageIndex',

  data () {
    return {
      user: null
    }
  },

  mounted () {

  },

  components: {
    OnlineEventPageVimeo
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
