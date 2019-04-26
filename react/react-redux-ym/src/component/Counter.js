import React, { Component } from 'react'
import actions from '../store/action/counter'
import {connect} from '../react-redux'

class Counter extends Component {
  render() {
    return (
      <div>
        {this.props.number}
        <button onClick={() => this.props.add(2)}>+</button>
        <button onClick={() => this.props.minus(3)}>-</button>
      </div>
    )
  }
}
// export default connect((state)=>({...state}), actions)(Counter)



let mapStateToProps = (state) => {
  return {
    ...state
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    add: (v) => dispatch(actions.add(v)),
    minus: (v) => dispatch(actions.minus(v))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter)
// export default connect(mapStateToProps, actions)(Counter)