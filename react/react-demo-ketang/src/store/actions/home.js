import * as types from '../actions-types'
import {getSliders,getLessons} from '@/api/home'

export default {
  changeCategory(category) {
    return {type: types.CHANGE_CATEGORY, payload:category}
  },
  getSliders(){ // 无法直接返回action对象{}的形式，需用中间件处理
    return function(dispatch, getState){
      getSliders() // 返回promise
        .then(sliders => {
          dispatch({type:types.SET_HOME_SLIDERS, payload:sliders});
        })
    }
    
  },
  getLessons(){
    return function(dispatch, getState){
      console.log(getState());
      let {category,lessons:{offset,limit,hasMore,loading}} = getState().home;
      if(hasMore && !loading) {
        getLessons(category,offset,limit) // 返回promise
        .then(payload => {
          dispatch({type:types.SET_HOME_LESSONS, payload});
        })
      }
    }
    
  }
}