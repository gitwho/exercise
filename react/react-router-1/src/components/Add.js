import React, { Component } from 'react'

export default class Add extends Component {
  input = React.createRef();
  // let users = [];
  handleClick = () => {
    let users = JSON.parse(localStorage.getItem('user')) || [];
    users.push({id: Math.random(), name: this.input.current.value});
    localStorage.setItem('user', JSON.stringify(users));
    this.props.history.push('/user/list')
  }
  render() {
    // 通过Route组件渲染出来的 页面 有三个属性 history, location, match
    console.log(this.props)
    return (
      <div>
        <input type="text" ref={this.input} className="form-control" />
        <button className="btn btn-primary" onClick={this.handleClick}>添加</button>
      </div>
    )
  }
}
