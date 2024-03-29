import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import City from '@/components/city'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/city',
      name: 'City',
      component: City
    }
  ]
})
