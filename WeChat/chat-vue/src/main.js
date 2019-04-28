// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './store'
import Store from './store'

Vue.use(Vuex)
Vue.use(ElementUI)
Vue.prototype.$store =Store;
Vue.config.productionTip = false


// router.beforeEach((to,from,next)=>{
//   if(!sessionStorage.token){
//     next(
//       router.push('/login')
//     )
//   } else{
//     next()
//   }
// })




router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    //这里判断用户是否登录，验证本地存储是否有token
    if (!sessionStorage.token) { // 判断当前的token是否存在
      next({
        path: '/login',
        // query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // 确保一定要调用 next()
  }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

