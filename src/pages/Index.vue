<template>
  <div>
    Total Online: {{ onlineUsers.length }}
  </div>
</template>

<script>

export default {
  name: 'PageIndex',

  data () {
    return {
      user: null,

      presentUsers: null
    }
  },

  mounted () {
    // this.$echo.join('online')
    //   .here((data) => {
    //     this.$MUser.insertOrUpdate({ data })
    //   })
    //   .joining((data) => {
    //     this.$MUser.insert({ data })
    //   })
    //   .leaving((data) => {
    //     this.$MUser.delete(data.id)
    //   })
    //   .listen('NewMessage', (e) => {
    //     console.log('message', e)
    //   })
  },

  components: {

  },

  computed: {
    onlineUsers () {
      return this.$MUser.query()
        .where('inOnlineEvent', true)
        .get()
    }
  },

  methods: {

  }
}
</script>
