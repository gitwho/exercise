const DETAILEDUPDATA = 'DETAILEDUPDATA'


const state = {
  detailed:{}
}
const mutations = {
  [DETAILEDUPDATA]:(state,msg) => {
    console.log(msg)
    state.detailed = msg.msg
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
