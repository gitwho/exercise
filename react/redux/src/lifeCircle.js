// 生命周期
// 记住常见的生命周期 知道每个生命周期 可以做什么事
// 新的生命周期

// willMount DidMount willReceiveProps 其他都不能调用setState
// 
import React from 'react'
import ReactDOM from 'react-dom'

class ChildCounter extends React.Component{
  state = {}
  // componentWillMount(){
  //   console.log('child componentWillMount');
  // }
  render() {
    console.log('child render');
    return <div>
      儿子 {this.props.a}
    </div>
  }
  componentDidMount(){
    console.log('child componentDidMount');
  }
  // componentWillReceiveProps() {// 组件接收到了新的属性(第一次不触发)
  //   console.log('componentWillReceiveProps');
  //   // 接收到的属性后 一般的人可能会把接受到的属性放到状态上
  //   // 建议不要调用setState， 16.3以后版本
  // }
  static getDerivedStateFromProps(newProps) {
    console.log(newProps); // 没有在此方法中显示调用setState
    return {a: newProps.a} // 返回新状态
  }

  shouldComponentUpdate(newProps) {
    console.log('child shouldComponentUpdate');
    return true
  }
}

class Counter extends React.Component{
  static defaultProps = {
    name: 'zf'
  }
  state = {
    count: 1
  }
  constructor(props) {
    super();
    console.log(props);
  }
  shouldComponentUpdate(nextProps, nextState) { // 组件是否要更新
    // 可以做优化（immutable）
    // 返回false， 数据状态还是会更新，但是组件不更新（视图上看不见变化）
    return nextState.count%2 !== 0;

  }
  // componentWillUpdate() {
  //   console.log('组件将要更新')
  // }
  getSnapshotBeforeUpdate(prevProps, prevState) { // 获取更新前牌照
    console.log('组件将要更新 getSnapshotBeforeUpdate');
    console.log(arguments);
    return {a:1} // 会加到 componentDidUpdate 参数之后
  }
  // componentWillMount() { // 16.3 如果使用新的api 就不再使用

  // }
  render() {
    console.log('render');
    return <div>
      {this.state.count}
      <ChildCounter a={this.state.count}></ChildCounter>
      <button onClick={() => {
        // 无论数据是否变化 都会重新调用render方法
        this.setState({
          count: this.state.count+1
        })
      }}>太久</button>
    </div>
  }
  componentDidUpdate(a, b, c) {
    console.log('组件更新完成');
    console.log(a,b,c);
  }
  // 生命周期都是同步执行的 但ajax 是异步的 一定会更新两次(先渲染，拿到数据后再渲染)
  componentDidMount() { // ajax 或者 获取dom元素
    console.log('componentDidMount');
  }
}

ReactDOM.render(<Counter age={8}></Counter>, window.root)