export default function (router) {
  router.addRoutes([
    {
      path: '/member',
      component: resolve => require(['../components/index/index.vue'], resolve)
    }
  ])
}
