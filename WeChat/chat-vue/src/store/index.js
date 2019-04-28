import Vue from 'vue';
import Vuex from 'vuex';
import {HEADERNAME,TABACTIONONE,SET_TOKEN,DEL_TOKEN} from './mutation-type'
import detailedMsg from './modules/detailedMsg'
import groupMsg from './modules/groupMsg.js'
import headImg from '../static/img/head/head.png'
Vue.use(Vuex);

export default new Vuex.Store({
  state:{
    token:'',
    headerName:'消息',//右侧页面公共header
    tabsActionOne:0,
    messageList:[
      {
        img:headImg,
        title:'小标兵1',
        messgaeOld:'小标兵你好啊',
        messageTime:'7:00 AM'
      },
      {
        img:headImg,
        title:'小标兵2',
        messgaeOld:'小标兵你好啊',
        messageTime:'7:00 AM'
      },
      {
        img:headImg,
        title:'小标兵3',
        messgaeOld:'小标兵你好啊',
        messageTime:'7:00 AM'
      },
      {
        img:headImg,
        title:'小标兵4',
        messgaeOld:'小标兵你好啊',
        messageTime:'7:00 AM'
      },
    ],//消息列表
  },
  //类似于计算属性
  getters:{
    doneTodos:state=>10
  },
  mutations:{
    // 传入额外的参数，即 mutation 的 载荷（payload） 也就是下面的 参数n
    [HEADERNAME]:(state,n)=>{
      //变更状态
      state.headerName=n.name
      console.log(n);
    },
    [TABACTIONONE]:(state,n)=>{
      state.tabsActionOne = n.num
    },
    [SET_TOKEN]:(state,data)=>{
      //sessionStorage 存的是当前会话，会话结束 东西就消失，
      // 所以我这边准备是 这个用来判断需要登录，而读取用localStorage
      state.token = data.token
      sessionStorage.token = data.token
      localStorage.token = data.token
    },
    [DEL_TOKEN]:(state)=>{
      state.token = ''
      sessionStorage.removeItem('token')
      localStorage.removeItem('token')
    }
  },
  actions:{
    // incement:({commit},n)=>{
    //   console.log(n)
    //   setTimeout(()=>{
    //     commit('INCREMENT')
    //   },1000)
    // }
  },
  modules:{
    detailedMsg,
    groupMsg
  }
});
