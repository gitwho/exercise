import React,{Component} from 'react'
import ReactDOM from 'react-dom'

// 属性传入到组件中不能更改
// 若有需求要改：把属性变成组件的状态
class Counter extends Component {
  state = {
    count: this.props.count
  }
  handleClick = () => {
    // 为什么 放到 setTimeout中 就会渲染多次
    // setState 批量更新的操作 （并不是一直的批量更新）
    setTimeout(() => {
      this.setState({
        count: this.state.count + 1
      })
      this.setState({
        count: this.state.count + 3
      })
      this.setState({
        count: this.state.count + 2
      })
    }, 0)
    
  }
  render() {
    console.log('render');
    return (
      <div>
        {this.state.count}
        <button onClick={this.handleClick}>添加</button>
      </div>
    )
  }
}

ReactDOM.render(<Counter count={10} />, window.root)



 