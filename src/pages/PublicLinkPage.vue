<template>
  <q-page
    class="flex column flex-center"
    v-if="loading"
  >
    <q-spinner
      color="primary"
      size="8em"
    />
    <div class="text-h4 q-mt-lg text-grey-8">
      Fetching Video Link
    </div>
  </q-page>
  <online-event-page-vimeo v-else />
</template>

<script>
import OnlineEventPageVimeo from 'pages/OnlineEventPageVimeo.vue'

export default {
  props: {

  },

  components: {
    OnlineEventPageVimeo
  },

  mounted () {
    this.$MOnlineEvent.$findOnlineEventByUid(this.$route.params.online_event_public_uid)
      .then(this.handleSuccess)
      .catch(this.handleError)
  },

  computed: {
    onlineEvent () {
      return this.$MOnlineEvent.query()
        .where('uid', this.$route.params.online_event_public_uid)
        .first()
    }
  },

  methods: {
    handleSuccess (response) {
      this.loading = false
      if (this.$route.name === 'public-link') {
        this.$router.push(`/event/private/${this.$route.params.online_event_public_uid}/${response.data.id}`)
      }
    },

    handleError () {

    }
  },

  data () {
    return {
      loading: true
    }
  }
}

</script>
