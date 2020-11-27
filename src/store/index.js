import Vue from 'vue'
import Vuex from 'vuex'
import VuexORM from '@vuex-orm/core'
import { SchemaPlugin, VuexOrmRestPlugin } from '@ldiebold/process-orm-classes'
import database from './database'

Vue.use(Vuex)

VuexORM.use(VuexOrmRestPlugin, { api_url: process.env.API_URL + '/api' })
VuexORM.use(SchemaPlugin, { database })

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    plugins: [VuexORM.install(database)],

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEBUGGING
  })

  return Store
}
