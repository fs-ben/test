import Vue from 'vue'
import VueResource from 'vue-resource'
import * as global from './global'

Vue.use(VueResource)
Vue.http.options.emulateJSON = false;
Vue.http.options.timeout = 20000;
export const commonResource = Vue.resource(global.API_ROOT + 'rs{/id}{/controller}{/path}{/path2}')

Vue.http.interceptors.push(function (request, next) {
  request.headers.set('Authorization', global.getToken())

  next(function (response) {
    Vue.$vux.loading.hide()
    if (response.status == 200) {
      try {
        if (response.body.recode == '3002') {
          console.log("令牌失效")
        }
      } catch (error) {

      }
    }
  });
});
