import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Route, Redirect} from 'react-router-dom'
class PrivateRoute extends Component{
  render() {
    console.log('privateRoute',this.props)
    // user是 state.session里的属性， path是匹配的路径， component是要渲染的组件
    let {user, path, component:Comp} = this.props;
    if (user){ // 已经登录
      // Route的渲染三种方式：component render children
      return <Route path={path} component={Comp}/>;
    }else {
      return <Redirect to={{pathname: '/login', state:{from: path}}}/>
    }
  }
}

export default connect(state=>state.session)(PrivateRoute)