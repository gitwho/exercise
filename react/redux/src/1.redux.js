// redux 状态管理 把数据集中存放

// 1.redux中不能直接操作状态
// 2.如果任意一个组件中想更新状态，需要派发一个动作
// 3.每次更新状态 最好用一个新的状态对象覆盖掉

// JSON.parse(JSON.stringify(state))
let initState = {
  title: {content: '你好', color: 'red'},
  content: {content: 'hello', color: 'green'}
}
function createStore(reducer) {
  let state;
  let listeners = [];
  let getState = () => state; // 克隆一份state
  let dispatch = (action) => {
    state = reducer(state, action);
    // 
    listeners.forEach(fn=> fn())
  }
  let subscribe = (fn) => {
    listeners.push(fn);
    return () => {
      listeners = listeners.filter(x => fn !== x);
    }
  }
  dispatch({type: '@INIT'})
  return {
    getState,
    dispatch,
    subscribe
  }
}

// 1.当前组件状态 2. 用户派发的动作
function reducer(state = initState, action) { 
  switch (action.type) {
    case 'CHANGE_TITLE_COLOR': 
    return {...state,title:{...state.title,color:action.color}};
    case 'CHANGE_CONTENT_COLOR':
    return {...state,content:{...state.content,content:action.content}}
  }
  return state;
}

let store = createStore(reducer);
store.subscribe(renderApp);
let unsub = store.subscribe(() => {console.log('呵呵，更新了');})

setTimeout(() => {
  store.dispatch({type: 'CHANGE_TITLE_COLOR', color: 'pink'});
}, 1000)
setTimeout(() => {
  unsub();
  store.dispatch({type: 'CHANGE_CONTENT_COLOR', content: '新内容'});
}, 2000)


function renderTitle() {
  let title = document.getElementById('title')
  title.innerHTML = store.getState().title.content
  title.style.background = store.getState().title.color
}
function renderContent() {
  let content = document.getElementById('content')
  content.innerHTML = store.getState().content.content
  content.style.background = store.getState().content.color
}

function renderApp() {
  renderTitle();
  renderContent();
}
renderApp()