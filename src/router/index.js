import Vue from 'vue'
import VueRouter from 'vue-router'
import User from '../models/User'

import routes from './routes'

import { AuthorizeRoutes } from 'quasar-ui-sanctum'

Vue.use(VueRouter)

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default function (context) {
  const Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,

    // Leave these as they are and change in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  })

  Router.beforeEach((to, from, next) => beforeEach(to, from, next, context))

  return Router
}

function beforeEach (to, from, next, context) {
  const authorizerConfig = {
    localUser: User.query().first(),
    fetch_user: () => User.$session(),
    auth_endpoint: process.env.API_URL + '/login',
    login_endpoint: '/login',
    logout_endpoint: '/logout',
    errorNotifier: () => alert('error'),
    public_routes: ['/logout', '/login'],
    home_endpoint: '/'
  }

  const authorizer = new AuthorizeRoutes(authorizerConfig, to, from, next)
  return authorizer.authorize()
}
