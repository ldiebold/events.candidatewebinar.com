<template>
  <q-select
    v-bind="$attrs"
    v-on="$listeners"
    :options="events"
    :option-label="getLabel"
    :loading="fetching"
  />
</template>

<script>

export default {
  props: {

  },

  components: {

  },

  computed: {
    events () {
      return this.$MOnlineEvent.all()
    }
  },

  mounted () {
    if (!this.events.length) {
      this.fetching = true
      this.$MOnlineEvent.$get()
        .then(response => {
          this.fetching = false
        })
        .catch(error => {
          this.fetching = false
          this.$q.notify({
            color: 'red',
            message: error.message
          })
        })
    }
  },

  methods: {
    getLabel (event) {
      const formattedDate = this.$dayjs(event.start_time).format('ddd DD MMM - hh:ss A')
      return `${event.title} (${formattedDate})`
    }
  },

  data () {
    return {
      fetching: false
    }
  }
}

</script>
