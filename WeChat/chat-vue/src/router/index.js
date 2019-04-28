import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import DetailedMsg from '@/page/detailedMsg'
import ChatMsg from '@/page/chatMsg'
import NewFriend from '@/page/newFriend'
import Home from '@/page/home'
import Login from '@/page/login'
import Register from '@/page/register'
import GroupDetails from '@/page/groupDetails'
import UpPassword from '@/page/upPassword'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: { requiresAuth: true }
    },
    {
      path: '/index',
      name: 'Home',
      component: Home,
      children:[
        {
          path: '/detailedMsg',
          component: DetailedMsg
        },
        {
          path: '/chatMsg',
          component: ChatMsg
        },
        {
          path: '/groupDetails',
          component: GroupDetails
        },
        {
          path: '/newFriend',
          component: NewFriend
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/upPassword',
      name: 'upPassword',
      component: UpPassword
    },
    // {
    //   path: '/chatMsg',
    //   name: 'chatMsg',
    //   component: ChatMsg
    // }
  ]
})
