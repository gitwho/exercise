import Vue from 'vue'
import vuex from 'vuex'

import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

import user from './modules/user'
Vue.use(vuex)

export default new vuex.Store({
  modules: {
    user
  },
  state,
  getters,
  mutations,
  actions
})