// 受保护路由
import React  from 'react'
import {Redirect, Route} from 'react-router-dom'
// Component 如果登录就渲染这个组件 把其他属性变成对象

// component render children 之间的区别
export default function ({component:Component, ...rest}) {
  // 默认情况下 Route组件中应该传入的是component = {Profile}
  // 如果添加功能 render={()=> {}} // render 和 component 唯一不同的是render是一个函数 他返回的结果会被进行渲染
  return <Route {...rest} render={(props) => {
    return localStorage.getItem('login')? <Component {...props}></Component>:<Redirect to="/login" />
  }}>

  </Route>
}
