// ajaxRequest 获取

import axios from 'axios'
import store from '../store'
import {getLocal} from './local.js'

// 当第一次请求时 显示loading 剩下的时候就不再调用
// 当请求都结束时，隐藏loading
class AjaxRequest {
  constructor() {
    this.baseURL= process.env.NODE_ENV == 'production' ? '/': "http://localhost:3000";
    this.timeout = 3000; // 超时时间
    this.queue = {} // 存放每次的请求
  }
  merge(options) {
    return {...options, baseURL:this.baseURL, timeout: this.timeout}
  }
  setInterceptor(instance, url) { // 每次请求时，都会加一个loading 效果
    // 请求拦截
    instance.interceptors.request.use((config) => {
      config.headers.Authorization = getLocal('token');
      console.log(config);

      if (Object.keys(this.queue).length === 0) {
        store.commit('showLoading')
      }
      this.queue[url] = url
      return config;
    })
    // 响应拦截
    // 如果上一个promise 返回一个常量 会作为下一个promise的输入
    instance.interceptors.response.use((res) => {
      delete this.queue[url]; // 每次请求成功后 都删除队列里的路径
      if (Object.keys(this.queue).length === 0) {
        store.commit('hideLoading');
      }
      return res.data;
    })
  }
  request(options) {
    let instance = axios.create(); // 通过axios库创建一个axios实例
    this.setInterceptor(instance, options.url)
    let config = this.merge(options);
    return instance(config); // axios 返回的是promise
  }
}  

export default new AjaxRequest