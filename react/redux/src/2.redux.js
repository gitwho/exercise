function createStore(reducer) {
  let state;
  let listeners=[];
  let getState = () => state; // 取状态
  let dispatch = (action) => {  // 改状态
    state = reducer(state, action); // 让管理员执行，更新state
    listeners.forEach(fn => fn())
  }
  dispatch({type: '@INIT'}); // 初始化
  let subscribe = (fn) => { // 更新函数
    listeners.push(fn);
    return () => {
      listeners = listeners.filter(x => fn !== x);
    }
  }
  return {
    state,
    getState,
    dispatch,
    subscribe
  }
}

let initState = {number: 0};
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

function reducer(state = initState, action) {
  switch (action.type) {
    case INCREMENT: return {number: state.number+action.v};
    case DECREMENT: return {number: state.number-action.v};
  }
  return state
}

let store = createStore(reducer);

let render = function() {
  window.counter.innerHTML = store.getState().number;
}
render();
store.subscribe(render); 

window.add.addEventListener('click', function(){
  store.dispatch({type: INCREMENT, v: 1});
});

window.minus.addEventListener('click', function() {
  store.dispatch({type: DECREMENT, v:1});
})
