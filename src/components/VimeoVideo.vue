<template>
  <VimeoPlayer
    :video-id="videoId"
    @loaded="onLoaded"
    ref="video"
    class="embed-container"
  />
</template>

<script>
import { vueVimeoPlayer } from 'vue-vimeo-player'

export default {
  props: {
    videoId: {
      required: true,
      type: String
    }
  },

  components: {
    VimeoPlayer: vueVimeoPlayer
  },

  computed: {

  },

  methods: {
    exec (command, ...params) {
      return this.video[command](...params)
    },

    onLoaded () {
      this.$emit('ready', this.$refs.video.player)
    }
  },

  data () {
    return {
      video: null
    }
  }
}

</script>

<style>
.embed-container {
  --video--width: 1296;
  --video--height: 540;

  position: relative;
  padding-bottom: calc(var(--video--height) / var(--video--width) * 100%); /* 41.66666667% */
  overflow: hidden;
  max-width: 100%;
  background: black;
}

.embed-container iframe,
.embed-container object,
.embed-container embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
