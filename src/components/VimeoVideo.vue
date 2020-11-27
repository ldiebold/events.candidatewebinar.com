<template>
  <q-video
    beep
    ref="qVideo"
    :ratio="16/9"
    class="full-width"
    :src="`https://player.vimeo.com/video/${videoId}`"
  />
</template>

<script>
import VimeoPlayer from '@vimeo/player'

export default {
  props: {
    videoId: {
      required: true,
      type: String
    }
  },

  mounted () {
    const element = this.$refs.qVideo.$el.querySelector('iframe')

    this.video = new VimeoPlayer(element)

    this.video.ready()
      .then(this.onLoad)
  },

  computed: {

  },

  methods: {
    onLoad (data) {
      this.$emit('ready', this.video)
    },

    getPlayer () {
      return this.video
    }
  },

  data () {
    return {
      video: null
    }
  }
}

</script>
