import React from 'react'
// import store from '../store/index'
// import * as Types from '../store/action-types'
import actions from '../store/actions/counter'
// 需要在使用redux数据的组件上 使用connect方法连接redux
import {connect} from 'react-redux'

// window.store = store;
class Counter extends React.Component{
  // state = {
  //   number: store.getState().counter.number
  // }
  // componentWillMount() {
  //   this.unsub = store.subscribe(() => {
  //     this.setState({
  //       number: store.getState().counter.number
  //     })
  //   })
  // }
  // componentWillUnmount() {
  //   this.unsub();
  // }
  handleClick() {
    this.props.add(3)
  }
  render() {
    return (
      <>
        <p>{this.props.number}</p>
        <button onClick={this.handleClick}>add</button>
      </>
    )
  }
}

let mapStateToProps = (state) => { // state-> store.getState()
  return {
    number: state.counter.number
  }
}
let mapDispatchToProps = (dispatch) => { // dispatch-> store.dispatch
  return {
    add: (n) => dispatch(actions.add(n))
  }
}
// connect 方法执行两次后返回一个组件
// connect方法 最后一个函数的参数是原来的组件，会把redux中的状态映射到这个组件上
export default connect(mapStateToProps, mapDispatchToProps)(Counter)