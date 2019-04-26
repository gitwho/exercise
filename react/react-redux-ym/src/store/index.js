import {createStore} from 'redux'
import reducer from './reducer'
import reduxLogger from 'redux-logger'
// 运用中间件
import {applyMiddleware} from 'redux' 



let store = applyMiddleware(reduxLogger)(createStore)(reducer);

// 中间件的作用： 就是在dispatch中间更改内容

// 获取点击事件之前的值和之后的值
// 解：dispatch 会渲染页面，对dispatch进行重写
let oldDispatch = store.dispatch;
store.dispatch = function (action) {
  console.log(store.getState());
  oldDispatch(action);
  console.log(store.getState());
}

// 把多个中间件进行组合 洋葱模型 compose


export default store