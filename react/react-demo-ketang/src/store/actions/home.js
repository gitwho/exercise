import * as types from '../actions-types'

export default {
  changeCategory(category) {
    return {type: types.CHANGE_CATEGORY, payload:category}
  }
}