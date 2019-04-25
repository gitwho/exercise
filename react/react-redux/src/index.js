import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/Counter.js'
import Todo from './components/Todo'

// react-redux 主要是把 react 和 redux 进行连接的一个库
// 在父级需要提供store 这样在每个组件中就可以不用引入store了
// Provider != ContextApi Provider
import {Provider} from 'react-redux'
import store from './store/index'


ReactDOM.render(<Provider store={store}>
  <>
    <Counter />
    {/* <Todo /> */}
  </>
</Provider>, document.getElementById('root'));
