
import React,{Component} from 'react'
import ReactDOM from 'react-dom'
// 非受控组件
// 好处： 可以和第三方库使用
// 如果只是点击按钮获取 输入框的内容 推荐 非受控组件

class Control extends Component{
  password = React.createRef(); // 创建ref
  handleChange = (e) => {
    
  }
  handleSubmit= (e) => {
    e.preventDefault()
    console.log(this.username) // input dom元素
    console.log(this.username.value);
    console.log(this.password.current.value) 

    
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        {/* 法一：ref={(dom) => this.username = dom} */}
        {/* dom指 当前 input元素，绑定到 this.username上 */}
          <input required type="text" name="username"  ref={(dom) => this.username = dom} />
          {/* 法二： password = React.createRef(); // 创建ref */}
          <input  type="email" name="password" ref={this.password} />
          <button type="submit">提交</button>
        </form>
      </div>
    )
  }
}

ReactDOM.render(<Control />, window.root)