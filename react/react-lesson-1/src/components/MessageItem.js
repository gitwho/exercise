import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import {Consumer} from './Context.js'
export default class MessageItem extends Component{

  handleClick = () => {
    this.props.fn(3)
  }
  render() {
    let {title} = this.props.list;
    return (
      <Consumer>
        {({r}) => {
          return <li className="list-group-item">
            <h4>{title}</h4>
            <button className="btn btn-primary" onClick={this.handleClick}>点赞</button>
            <button className="btn btn-primary" onClick={() => {r()}}>取消</button>
          </li>
        }}
      </Consumer>
    )
  }
}