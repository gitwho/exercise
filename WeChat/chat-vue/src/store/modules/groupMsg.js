const GROUPMSG = 'GROUPMSG'

import headImg from '../../static/img/head/head.png'
const state = {
  groupMsg:{}
}
const mutations = {
  [GROUPMSG]:(state,msg) => {
    console.log(msg)
    state.groupMsg = msg.msg
  }
}
const action = {

}
export default {
  namespaced:true,
  state,
  mutations,
  action
}
