import React from 'react'
import store from '../store/index'
import * as Types from '../store/action-types'
import actions from '../store/actions/counter'

// window.store = store;
export default class Counter extends React.Component{
  state = {
    number: store.getState().counter.number
  }
  componentWillMount() {
    this.unsub = store.subscribe(() => {
      this.setState({
        number: store.getState().counter.number
      })
    })
  }
  componentWillUnmount() {
    this.unsub();
  }
  handleClick() {
    store.dispatch(actions.add(3))
  }
  render() {
    return (
      <>
        <p>{this.state.number}</p>
        <button onClick={this.handleClick}>add</button>
      </>
    )
  }
}