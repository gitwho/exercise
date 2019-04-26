import React,{Component} from 'react'
import Context from './context'

// Provider 主要提供store使用
export default class Provider extends Component{
  render() {
    return (<Context.Provider value={{store: this.props.store}}>
      {this.props.children}
    </Context.Provider>)
  }
}
