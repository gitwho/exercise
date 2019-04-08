export default {
  namespaced: true,
  state: {
    myName: 'jiang'
  },
  getters: {
    getChildName(state) {
      return '子模块名字：' + state.myName
    }
  },
  mutations: {
    change_user(state, newVal) {
      state.myName = newVal
    }
  },
  actions: {
    // actions 可多次调用 mutations
    change_user({commit}, newVal) {
      setTimeout(() => {
        commit('change_user', newVal)
      }, 1000);
      setTimeout(() => {
        commit('change_user', 'hello')
      }, 2000)
    }
  }
}