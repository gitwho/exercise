import Vue from 'vue';
import App from './App.vue';

import createRouter from  './router.js'
import createStore from './store.js'

import bus from './libs/eventBus'
// 为了兼容服务端 要把这个方法改造成函数
export default () => { // 创建实例的函数，防止重命名
  let router = createRouter();
  let store = createStore();
  let app = new Vue({
    router,
    store,
    render: (h) => h(App)
  })
  return {app, router, store}
}

