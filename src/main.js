// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import initRouter from './router'
import initStore from './store'

Vue.config.productionTip = false
Vue.config.devtools = false
let router = initRouter()
let store = initStore(initRouter)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
