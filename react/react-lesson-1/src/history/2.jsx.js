import React from 'react'
import ReactDOM from 'react-dom'

// jsx 可以包含js 的语法 与 HTML的写法有一些区别

// 1. 如果渲染两个相邻的jsx元素 需要被外面的一个标签所包裹<></>
// 2. 行内样式的写法, jsx 为了识别是 html 还是 js 需要用 < { 来区分
// 3. {} 表示写的是 js  三元表达式， 取值，（只要有返回值就可以显示）
// 4. 属性的名字有变化: htmlFor => for  className => class;
// 5. v-html 把内容当做 html 插入到页面中
// 6. 注释 js注释
let fn = function() {
  return <span>hello</span>
}
let str = "<img style= 'width: 100px' src='http://p3.gexing.com/G1/M00/C0/9A/rBACFFTh2OewHMsgAABeqCCAgpk889.jpg' />";
let ele = (
  <>
    <h1 style={{background:'red'}}>标题</h1>
    <p>内容{fn()}</p>
    {1==1?<span>对</span>:<span>错</span>}
    {JSON.stringify({name: 'zf'})}
    <p className="box">盒子</p>
    <label htmlFor="username">用户名</label>
    <input type="text" id="username" />
    {/* 危险操作 */}
    <div dangerouslySetInnerHTML={{__html:str}}></div>
  </>
)

// 数组可以直接渲染到页面
// 列表渲染 map 有返回值: forEach无返回值(X)
let arr = ['吃', '喝', '睡'];
let newArr = arr.map((item, key) => (<li key={key}>{item}</li>))

let obj = (
  <ul>
    {newArr}
  </ul>
)

// jsx元素可以进行嵌套
ReactDOM.render(obj, window.root)