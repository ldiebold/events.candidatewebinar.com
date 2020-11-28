<template>
  <q-card
    v-bind="$attrs"
    v-on="$listeners"
    class="shadow-8"
  >
    <div
      class="wistia_responsive_padding"
      style="padding:56.25% 0 0 0;position:relative;"
    >
      <div
        class="wistia_responsive_wrapper"
        style="height:100%;left:0;position:absolute;top:0;width:100%;"
      >
        <iframe
          :src="`https://fast.wistia.net/embed/iframe/${videoId}?videoFoam=true`"
          title="Quick overview (How we're gonna make this happen!) Video"
          allowtransparency="true"
          frameborder="0"
          scrolling="no"
          class="wistia_embed"
          name="wistia_embed"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  </q-card>
</template>

<script>

export default {
  props: {
    videoId: {
      required: true,
      type: String
    }
  },

  components: {

  },

  computed: {

  },

  created () {
    /* eslint-disable */
    let vm = this
    window._wq = window._wq || []
    _wq.push({
      id: this.videoId,
      onReady: function (video) {
        vm.video = video
        vm.$emit('ready', video)
      }
    })
    /* eslint-enable */
  },

  methods: {
    exec (command, ...params) {
      return this.video[command](...params)
    }
  },

  data () {
    return {
      video: null
    }
  }
}

</script>
