import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index/index'

import member from './member'

Vue.use(Router)

/** export default new Router({
  routes: [
    {path: '/', name: 'home', component: index},
    {path: '/member', name: 'member', component: index}
  ]
})*/
export default function () {

  let router = new Router({
    history: true,
    routes: [
      {path: '/', component: index},
      {path: '/member', component: index}
    ],
    hash: true,
    base: '/app/',
    saveScrollPosition: true,
    suppressTransitionError: true
  })
  member(router)
  // router.addRoutes([{path: '/my', name: 'home', component: resolve => require(['./vue/index.vue'], resolve)}])

  return router
}
