import * as types from '../actions-types'

let initState = {
  category: 'all',
  sliders: []
}
export default function(state=initState, action) {
  switch(action.type) {
    case types.CHANGE_CATEGORY: return {...state, category: action.payload};
    case types.SET_HOME_SLIDERS: return {...state, sliders: action.payload}
    default: return state;
  }
}