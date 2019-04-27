import * as Types from '../action-types.js'

export default {
  add(val) {
    // reduxThunk中间件 可返回函数
    // reduxThunk 会判断 会让返回的函数执行 并把dispatch权限交给用户自己
    // return (dispatch, getState) => {
    //   setTimeout(() => {
    //     dispatch({type: Types.INCREMENT, count: val});
    //   }, 1000)
    // }

    return {type: Types.INCREMENT, count: val}
  },
  minus(val) {
    // return {type: Types.DECREMENT, count: val}
    return {
      type: Types.DECREMENT,
      payload: new Promise((resolve, reject) => {
        setTimeout(function() {
          if(Math.random()> 0.5) {
            resolve(100);
          }else {
            reject(200);
          }
        }, 1000)    
      })
    }
    // new Promise((resolve, reject) => {
    //   setTimeout(function(){
    //     resolve({type: Types.DECREMENT, count: val})
    //   }, 2000)
      
    // }
  }
}