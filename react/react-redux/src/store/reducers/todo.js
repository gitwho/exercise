import * as Types from '../action-types'

function todo(state=[], action) {
  switch(action.type) {
    case Types.ADD_TODO : return [...state, action.todo];
  }
  return state
}

export default todo