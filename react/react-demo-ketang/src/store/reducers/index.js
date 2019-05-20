import {combineReducers} from 'redux';
import home from './home'
import session from './session'
import {connectRouter} from 'connected-react-router'
export default (history) => combineReducers({
  home,
  session,
  router: connectRouter(history)
})