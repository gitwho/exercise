import * as Types from '../action-types.js'

export default {
  add(val) {
    return {type: Types.INCREMENT, count: val}
  },
  minus(val) {
    return {type: Types.DECREMENT, count: val}
  }
}