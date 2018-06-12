import * as actions from '../actions/member'

const state = {
  pic: null,
  msn: null
}
const mutations = {
  SET_DATA (state, action) {
    state.pic = action.token
    state.msn = action.user
  }
}
const getters = {
  getMemberInfo: state => state.pic,
  getMemberStore: state => state.msn
}
export default {
  state,
  actions,
  getters,
  mutations
}
