<template>
  <div
    v-bind="$attrs"
    v-on="$listeners"
  >
    <q-chip
      v-for="onlineEvent in onlineEvents"
      :key="onlineEvent.id"
      class="text-white bg-grey-8"
      :style="onlineEvent.hex_color ? `background-color: ${onlineEvent.hex_color} !important` : ''"
    >
      {{ format(onlineEvent) }}
    </q-chip>
  </div>
</template>

<script>
import dayjs from 'dayjs'

export default {
  props: {
    onlineEvents: {
      required: true,
      type: Array
    }
  },

  components: {

  },

  computed: {
    formattedAsString () {
      return this.onlineEvents
        .map(onlineEvent => onlineEvent.title)
        .join(', ')
    }
  },

  methods: {
    format (onlineEvent) {
      const startTime = dayjs(onlineEvent.start_time).format('ddd, DD MMM')
      return `${onlineEvent.title} - (${startTime})`
    }
  },

  data () {
    return {

    }
  }
}

</script>
