import {createStore, applyMiddleware} from 'redux'
import reducers from './reducers'

// 三个中间件
import promise from 'redux-promise'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
let store = createStore(reducers, applyMiddleware(promise, thunk, logger));
window.store = store;
export default store;