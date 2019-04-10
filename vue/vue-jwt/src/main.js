import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.use(router);
Vue.use(iView);

Vue.config.productionTip = false

let whiteList = ['/xx']  // 设置白名单
router.beforeEach(async (to, from, next) => {
  if (whiteList.includes(to.path)) { // 在白名单中，不需要校验
    return next()
  }
  let isLogin = await store.dispatch('validate')
  let needLogin = to.matched.some(match => match.meta.needLogin)
  if (needLogin) { // 是否需要登录
    if (isLogin) { // 登录了
      next()
    }else {
      next('/login')
    }
  }else {
    if (isLogin && to.name === 'login') { // 登录了且访问页是 login，则跳首页
      next('/')
    }else {
      next()
    }
  }
  
})

import Test from './components/test.vue'
import Test2 from './components/test2.vue'

Vue.component('Test3',{
  props: {
    level: {}
  },
  render(h) {
    // 写法二
    let tag = 'h' + this.level
    return  <tag>good</tag>
    
    // // 写法一
    // h('h'+this.level, '你哈')
  }
})
new Vue({
  router,
  store,
  render(h){
    return  <Test3 level="1">拟好</Test3>

    // // 问题 level 范围很大，则 test2.vue 写的繁琐
    // <Test2 level="2">你好吗</Test2>
    
    // // 写法四
    // <Test name={'fz'} on-mousedown={() => {alert(100)}}>new2</Test>

    // // 写法三
    // h(Test, {
    //   props: {
    //     name: 'fz'
    //   },
    //   on: {
    //     mousedown(){
    //       alert(100)
    //     }
    //   },
    //   nativeOn: {
    //     click() {
    //       alert(1)
    //     }
    //   }
    // }, 'new')

            // // 写法二
            // <h1 
            // on-click={() => {alert(2)}} 
            // style={{color: 'red'}}
            // id='1'            
            // >你好</h1>
    // // 写法一
    // h('h1', {  // jsx
    //   class: ['a', 'b'],
    //   domProps: {
    //     innerHTML: 'hahha'
    //   },
    //   style: {
    //     color: 'red'
    //   },
    //   attrs: {
    //     id: '1'
    //   },
    //   on: {
    //     click() {
    //       alert(1)
    //     }
    //   }
    // }, '你好')
  }
}).$mount('#app')




// jwt 把用户信息存到客户端 每次客户端带上token 服务端 校验是否登录过
// session 则是存到服务器