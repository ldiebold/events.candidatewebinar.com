<template>
  <SanctumLoginPage @success="handleSuccess" />
</template>

<script>
import { SanctumLoginPage } from 'quasar-ui-sanctum'
import User from '../models/User'

export default {
  props: {

  },

  components: {
    SanctumLoginPage
  },

  computed: {

  },

  methods: {
    handleSuccess (response) {
      this.$auth.fetchUser().then(response => {
        User.create({
          data: response.data
        })
        this.$router.push('/')
      })
    }
  },

  data () {
    return {

    }
  }
}

</script>
