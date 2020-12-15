/* eslint-disable */
import Echo from 'laravel-echo'
import axios from 'axios'
window.Pusher = require('pusher-js')

export default ({ Vue, router }) => {
  router.beforeHooks.push((to, from, next) => {
    if (Vue.prototype.$MUser.getSessionUser()) {
      registerEcho(Vue)
    }
    next()
  })
}

function registerEcho (Vue) {
  Vue.prototype.$echo = new Echo({
    broadcaster: 'pusher',
    key: 'cfxsXJ6Y6SCbVHpekPaf',
    httpsHost: 'api.process.test',
    wsHost: 'socket.process.test',
    wssHost: 'socket.process.test',
    cluster: 'mt1',
    encrypted: true,
    authorizer: (channel, options) => {
      return {
        authorize: (socketId, callback) => {
          axios.post(`${process.env.API_URL}/api/broadcasting/auth`, {
            socket_id: socketId,
            channel_name: channel.name
          })
            .then(response => {
              callback(false, response.data)
            })
            .catch(error => {
              callback(true, error)
            })
        }
      }
    }
  })
}
