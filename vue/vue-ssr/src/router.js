// 配置路由

import Vue from 'vue'
import VueRouter from 'vue-router'
import Bar from './components/Bar.vue'
import Foo from './components/Foo.vue'

Vue.use(VueRouter);


export default () => {
  let router = new VueRouter({
    mode: 'history',
    routes: [
      {path: '/', component: Bar},
      // {path: '/foo', component: () => import('./components/Foo.vue')}
      {path: '/foo', component: Foo}
    ]
  });
  return router
}