// 服务端 操作vuex

import Vue from 'vue'

import Vuex from 'vuex'

Vue.use(Vuex);

export default () => {
  let store = new Vuex.Store({
    state: {
      username: 'jw'
    },
    mutations: {
      set_username(state) {
        state.username = 'sss'
      }
    },
    actions: {
      set_username({commit}) {
        return new Promise((resolve, reject) => {
          // 模拟异步获取数据，更改state，显示在页面上
          setTimeout(() => {
            commit('set_username');
            resolve();
          }, 1000)
        })
      }
    }
  });
  // node运行有 window
  if (typeof window !== 'undefined' && window.__INITIAL_STATE__) {
    // 将后端的状态 替换 前端的状态
    // 替换store状态
    store.replaceState(window.__INITIAL_STATE__);
  }
  return store
}
