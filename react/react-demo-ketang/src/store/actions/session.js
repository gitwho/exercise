import * as types from '../actions-types'
import {login, reg} from '@/api/session'
import {push} from 'connected-react-router'

export default {
  reg(body){ 
    return function(dispatch, getState){
      reg(body) 
        .then(payload => {
          console.log('+ ',payload)
          dispatch({type:types.SET_SESSION, payload});
          // 注册成功，跳登录页，注册失败，重新提交
          if (!payload.error) {
            dispatch(push('/login'))
          }
        })
    }
  },
  login(body){ 
    return function(dispatch, getState){
      login(body) 
        .then(payload => {
          console.log('login+ ',payload)
          dispatch({type:types.SET_SESSION, payload});
          // 注册成功，跳登录页，注册失败，重新提交
          if (!payload.error) {
            console.log('login');
            let state = getState().router.location.state;
            let target = state ? state.from:'./profile';
            dispatch(push(target))
          }
          
        })
    }
    
  }
  
}