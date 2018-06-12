import Vue from 'vue'
import Vuex from 'vuex'
// import {sync} from 'vuex-router-sync'
import plugins from './storePlugin'
import memberStore from './memberStore'

Vue.use(Vuex)

export default function (router) {

  const store = new Vuex.Store({plugins})

  store.registerModule('member', memberStore)
  // sync(store, router)
  return store
}
