import React,{Component} from 'react';
import axios from 'axios'
import MessageLeft from './MessageLeft'
import MessageRight from './MessageRight'
import {Provider} from './Context.js'

axios.interceptors.request.use(function(config) {
  console.log(config) // 请求头
  config.headers = { // 配置token
    token: 'xxxx'
  }
  return config
})
axios.interceptors.response.use(function(res) {
  if (res.data.code == 1) {
    return res.data.data
  }
  return Promise.reject()
})

export default class MessageBox extends Component{
  state = {
    lists: [],
    total: 0
  }
  handleClick = (val) => {
    this.setState({
      total: this.state.total + val
    })
  }
  resetClick = () => {
    this.setState({
      total: 0
    })
  }
  // fetch 原生提供 基于promise 太底层
  // axios 基于promise 拦截器
  async componentDidMount() {
    let lists = await axios.get('./list.json')
      // console.log(res)
    this.setState({
      lists
    })
  }
  render() {
    return (
      // 提供的值必须叫value属性， 放了一个对象{r: this.resetClick}
      <Provider value={{r: this.resetClick}}> 
        <div className="container">
          <div className="panel panel-danger">
            <div className="panel-heading">
              列表点赞
            </div>
            <div className="panel-body">
              <MessageRight lists={this.state.lists} fn={this.handleClick}></MessageRight>
            </div>
            <div className="panel-footer">
              <MessageLeft total={this.state.total}></MessageLeft>
            </div>
          </div>
        </div>
      </Provider>
    )
  }
}

// 父传子 靠属性
// 平级靠 共同的父组件
// 跨级 靠 Context.js