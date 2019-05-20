import {createStore, applyMiddleware} from 'redux'
import reducers from './reducers'

// 三个中间件
import promise from 'redux-promise'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import {routerMiddleware} from 'connected-react-router'
import history from '@/history'
let routerWare = routerMiddleware(history);

let store = createStore(reducers(history), applyMiddleware(promise, thunk,routerWare, logger));
window.store = store;
export default store;