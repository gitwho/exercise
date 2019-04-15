import React,{Component} from 'react'
import ReactDOM,{render} from 'react-dom'

// 实现一个类  父类提供了一个更改自己的状态的方法
// jsx 元素事件 所有的属性都是 onXxxx

// React.Component 是父类 提供了 例如setState
class Clock extends Component {
  // constructor(props) {
  //   // console.log(props);
  //   super(props) // Component.call(this)
  //   this.state = {}// this.state 这个名字是死的
  // }
  state = {
    a: 1,
    date: new Date().toLocaleString()
  }
  componentDidMount() { // 这里可以获取dom元素， 组件已经挂载完成了
    let timer = setInterval(() => {
      this.setState({
        date: new Date().toLocaleString()
      }); // 调用setState 就会更新视图
    }, 1000)
  }
  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  // 常见的绑定this方法： 1.bind  2.箭头函数  3.es7绑定
  handleClick = () => {
    console.log(this) 
    ReactDOM.unmountComponentAtNode(window.root)
  }
  render() {
    // console.log(this) //

    
    return <h2>时间: {this.state.date}<button onClick={this.handleClick}>点击删除</button> {this.state.a}</h2> 

    // 点击一次产生一个函数
    // return <h2>时间: {this.state.date}<button onClick={this.handleClick.bind(this)}>点击删除</button> {this.state.a}</h2> 


  }
}

render(<Clock a="1"></Clock>, window.root)


// 不要通过外界绑定调用内部函数
// class A {
//   fn() {
//     console.log(this);
//   }
// }
// let a = new A();
// let fn = a.fn;
// fn(); // undefined
