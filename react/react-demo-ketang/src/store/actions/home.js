import * as types from '../actions-types'
import {getSliders} from '@/api/home'

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
    
  }
}