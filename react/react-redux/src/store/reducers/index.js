import counter from './counter'
import todo from './todo'
// combineReducers 把两个状态合并成一个 并把reducer变成一个
// import {combineReducers} from 'redux'

// export default combineReducers({
//   counter,
//   todo
// });

// 实现combineReducers

// 需要把每个reducer都执行 把结果放到一个新对象上
// combineReducers 返回的是 'reducer'函数
function combineReducers(reducers) { 
  // 第一次state传的是个undefined，所以要给个默认值，防止state[key]报错，
  // 第二次才穿有值, eg: {counter:{number:0},todo:[]}
  return function (state={}, action) {
    let obj = {};
    for (let key in reducers) {
      obj[key] = reducers[key](state[key], action)
    }
    return obj
  }
}
export default combineReducers({
  counter:counter,
  todo
});