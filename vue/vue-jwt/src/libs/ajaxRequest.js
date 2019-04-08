// ajaxRequest 获取

import axios from 'axios'


class AjaxRequest {
  constructor() {
    this.baseURL= process.env.NODE_ENV == 'production' ? '/': "http://localhost:3000";
    this.timeout = 3000; // 超时时间
  }
  merge(options) {
    return {...options, baseURL:this.baseURL, timeout: this.timeout}
  }
  setInterceptor(instance) {
    // 请求拦截
    instance.interceptors.request.use((config) => {
      config.headers.Authorization = 'xxx'
      console.log(config)
      return config;
    })
    // 响应拦截
    // 如果上一个promise 返回一个常量 会作为下一个promise的输入
    instance.interceptors.response.use((res) => {
      return res.data;
    })
  }
  request(options) {
    let instance = axios.create(); // 通过axios库创建一个axios实例
    this.setInterceptor(instance)
    let config = this.merge(options);
    return instance(config); // axios 返回的是promise
  }
}  

export default new AjaxRequest