import Vue from 'vue';
import App from './App.vue';

// 为了兼容服务端 要把这个方法改造成函数
export default () => { // 创建实例的函数，放置重命名
  let app = new Vue({
    
    render: (h) => h(App)
  })
  return {app}
}

