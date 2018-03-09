import Vue from 'vue'
import Vuex from 'vuex'
import Cookies from 'vue-cookies'

Vue.use(Vuex)
Vue.use(Cookies)

let state = {
  count: 0,
  token: ''
}
const mutations = {
}

const actions = {
}

const getters = {
  token: () => {
    return state.token
  }
}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
