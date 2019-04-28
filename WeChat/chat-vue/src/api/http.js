import Axios from 'axios';
import { MessageBox } from 'element-ui';
import Vue from 'vue'
import router from '../router'

import QS from 'qs';
import  store from '@/store/index'
// // 环境的切换
// if (process.env.NODE_ENV == 'development') {//开发环境
//   axios.defaults.baseURL = '';}
// else if (process.env.NODE_ENV == 'debug') {//测试环境
//   axios.defaults.baseURL = '';
// }
// else if (process.env.NODE_ENV == 'production') {//生产环境
//   axios.defaults.baseURL = '';
// }
//
// axios.defaults.timeout = 5000;
function open(title,content,type) {
  MessageBox.alert(content,title, {
    confirmButtonText: '确认',
    type: type,//success，error，info和warning
    callback: action => {
    }
  })
  setTimeout(() => {
    MessageBox.close();
  }, 1000);

}

Axios.defaults.baseURL = '/apis';
Axios.defaults.timeout = 3000;//超时时间
Axios.defaults.headers ={'X-Requested-With': 'XMLHttpRequest'};
     // this.headers ={'Content-Type':'application/x-www-form-urlencoded'};

Axios.interceptors.request.use(config => {
  //在发送请求之前做些什么 比如headers加token啥的
  //每次发送请求之前判断vuex中是否存在token
  //如果存在，则统一在http请求的header都加上token,这样后台根据token判断你的登陆情况
  //即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断

  const token = localStorage.token;
  console.log(token)
  token && (config.headers.Authorization = token)
  return config;
}, function (error) {
  //对请求错误做些什么
  return Promise.reject(error)
})
//添加响应拦截器
Axios.interceptors.response.use(
  response => {
    //因为这边token认证失败 是放在data里面的，所以请求返回200 才能拿到，在这里判断 code=== 10001的时候为token过期
    if(response.data.code === 10001){
        //token过期，重新登录
      //给个弹框提示
      open('认证失败','您的凭证失效，请重新登录！','error')
      setTimeout(()=>{
        router.push('/login')
      },1000)
    }
    console.log(response)
    // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
    // 否则的话抛出错误
    // if(response)
    if (response.status === 200) {
      console.log(response.data)
      return Promise.resolve(response.data);
    } else {
      return Promise.reject(response);
    }
  }, error => {
    console.log(error)
    // if (error.response.status) {
    //   switch (error.response.status) {
    //     // 401: 未登录
    //     // 未登录则跳转登录页面，并携带当前页面的路径
    //     // 在登录成功后返回当前页面，这一步需要在登录页操作。
    //     case 401:
    //       router.replace({
    //         path: '/login',
    //         query: {
    //           redirect: router.currentRoute.fullPath
    //         }
    //       });
    //       break;
    //
    //     // 403 token过期
    //     // 登录过期对用户进行提示
    //     // 清除本地token和清空vuex中token对象
    //     // 跳转登录页面
    //     case 403:
    //       //在这里弹出弹框提示用户
    //       //'登录过期，请重新登录'
    //
    //       // 清除token
    //       localStorage.removeItem('token');
    //       store.commit('loginSuccess', null);
    //       // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
    //       setTimeout(() => {
    //         router.replace({
    //           path: '/login',
    //           query: {
    //             redirect: router.currentRoute.fullPath
    //           }
    //         });
    //       }, 1000);
    //       break;
    //
    //     // 404请求不存在
    //     case 404:
    //       //网络请求不存在
    //
    //
    //
    //       break;
    //     // 其他错误，直接抛出错误提示
    //     default:
    //
    //       // 其他错误，直接抛出错误提示
    //
    //   }
    //   return Promise.reject(error.response);
    // }
  }
)
export default Axios





