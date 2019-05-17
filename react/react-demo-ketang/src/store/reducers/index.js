import {combineReducers} from 'redux';
import home from './home'
import session from './session'
import {routerReducer} from 'connected-react-router'
export default combineReducers({
  home,
  session,
  router: routerReducer
})