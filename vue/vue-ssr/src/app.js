import Vue from 'vue';
import App from './App.vue';

import createRouter from  './router.js'

// 为了兼容服务端 要把这个方法改造成函数
export default () => { // 创建实例的函数，防止重命名
  let router = createRouter();
  let app = new Vue({
    router,
    render: (h) => h(App)
  })
  return {app, router}
}

