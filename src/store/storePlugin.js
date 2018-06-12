/**
 * vuex store插件方法
 */
let globalStore
const setStore = store => {
  globalStore = store
}
export const getStore = function () {
  return globalStore
}
export default [setStore]
