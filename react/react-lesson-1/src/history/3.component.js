// 组件的特点 和 好处
// 方便复用，维护，管理

// react中 函数就是一个组件(组件名 必须大写)， 和jsx元素 react元素 进行区分
// 大写即为组件；小写为 jsx元素

// 组件的分类：1. 函数组件， 2.类组件
// 函数组件： 1. 没有this指向， 2. 没有生命周期  3. 没有状态

//  所有的组件都有属性（使用的人 可以提供这些属性）
import React from 'react'
import ReactDOM from 'react-dom'

function Clock(props) {
  return <h2>当前时间 {props.date.toLocaleString()}</h2>
}

// 可以和 jsx元素 混用
setInterval(function(){
  // 默认 render方法 只更新变化的地方
  ReactDOM.render(
    <div>
      时钟：
      <Clock date={new Date()}>xxx</Clock>
      <Clock date={new Date()}></Clock>
    </div>
  , window.root)
}, 1000)
