// 表单 提交表单
// 可以获取dom元素 .value 非受控(没有和状态有关系)组件 
// 受控组件(和状态相关的)，类似 双向绑定

import React,{Component} from 'react'
import ReactDOM from 'react-dom'

class Control extends Component{
  state = {
    username: 'jw',
    password: '888'
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit= (e) => {
    e.preventDefault()
    alert(JSON.stringify(this.state));
  }
  render() {
    return (
      <div>
        {/* form会自带表单校验 */}
        <form onSubmit={this.handleSubmit}>
          <input required type="text" name="username" value={this.state.username} onChange={this.handleChange} />
          
          <input  type="email" name="password" value={this.state.password} onChange={this.handleChange} />
          <button type="submit">提交</button>
        </form>
      </div>
    )
  }
}

ReactDOM.render(<Control />, window.root)