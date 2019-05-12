import * as types from '../actions-types'

let initState = {
  category: 'all',
  sliders: [],
  lessons: {
    list: [], // 数据
    limit: 5, // 每行限制
    offset: 0, // 下一页偏移量
    hasMore: true, // 是否更多
    loading: false // 是否正在加载
  }
}
export default function(state=initState, action) {
  switch(action.type) {
    case types.CHANGE_CATEGORY: return {...state, category: action.payload};
    case types.SET_HOME_SLIDERS: return {...state, sliders: action.payload};
    case types.SET_HOME_LESSONS: 
      return {...state, lessons: {
        ...state.lessons, 
        list: [...state.lessons.list, ...action.payload.list], // 数组合并
        hasMore: action.payload.hasMore,
        offset: state.lessons.offset + action.payload.list.length,
        loading: false
      }}
    default: return state;
  }
}