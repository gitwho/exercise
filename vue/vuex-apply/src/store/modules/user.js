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
  actions: {}
}