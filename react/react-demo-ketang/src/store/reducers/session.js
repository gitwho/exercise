import * as types from '../actions-types'

let initState = {
  users: null,
  success: null,
  error: null
}

export default function(state=initState, action) {
  switch(action.type) {
    case types.SET_SESSION: console.log(action.payload); return {...action.payload}; // 全部覆盖
    default: return state;
  }
}