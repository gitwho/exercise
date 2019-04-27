import {createStore} from 'redux'
import reducer from './reducer'
import { promised } from 'q';
// import reduxLogger from 'redux-logger'
// // 运用中间件
// import {applyMiddleware} from 'redux' 

// 1.实现 reduxLogger
// 最后返回的函数是真正的dispatch方法
// let reduxLogger = (store) => (dispatch) => (action) => {
//   console.log(store.getState());
//   dispatch(action);
//   console.log(store.getState());
// }

// 2.redux-thunk 实现异步
// import reduxThunk from 'redux-thunk'

// // 手写 redux-thunk
// let reduxThunk = (store) => (dispatch) => (action) => {
//   if (typeof action === 'function') {
//     return action(dispatch, store.getState)
//   }
//   return dispatch(action);
// }

// 3. redux-promise
import reduxPromise from 'redux-promise'

// // 手写 redux-promise
// let reduxPromise = (store) => (dispatch) => (action) => {
//   if (action.then && typeof action.then === 'function') { // 判断是否是promise
//     // 如果返回的是一个promise 不会
//     return action.then(dispatch)
//   }
//   if (action.payload && action.payload.then && typeof action.payload.then === 'function') {
//     return action.payload.then(function(data) {
//       action.payload = data;
//       dispatch(action)
//     }, function(err){
//       action.payload = err;
//       dispatch(action);
//       return Promise.reject(err);
//     })
//   }
//   return dispatch(action)
// }


// 实现applyMiddleware
let applyMiddleware = (middleware) => (createStore) => (reducer) => {
  let store= createStore(reducer)
  let middle = middleware(store)
  let dispatch = middle(store.dispatch)
  return {
    ...store,
    dispatch
  }
}

let store = applyMiddleware(reduxPromise)(createStore)(reducer);

// 中间件的作用： 就是在dispatch中间更改内容
// // 获取点击事件之前的值和之后的值
// // 解：dispatch 会渲染页面，对dispatch进行重写
// let oldDispatch = store.dispatch;
// store.dispatch = function (action) {
//   console.log(store.getState());
//   oldDispatch(action);
//   console.log(store.getState());
// }

// 把多个中间件进行组合 洋葱模型 compose


export default store