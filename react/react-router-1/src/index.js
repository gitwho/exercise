import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Switch, Redirect, Link, NavLink} from 'react-router-dom'
import Home from './views/Home'
import User from './views/User'
import Profile from './views/Profile'
import Login from './views/Login'
import Protected from './Protected'
import MenuLink from './MenuLink'
import 'bootstrap/dist/css/bootstrap.css'

class App extends React.Component{
  render() {
    return <Router>
      <div>
        <div className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand">头部</a>
            </div>
            <ul className="nav navbar-nav">
              {/* <li><Link to="/">首页</Link></li>
              <li><Link to="/profile">个人中心</Link></li>
              <li><Link to="/user">用户</Link></li>
              <li><Link to="/login">登录</Link></li> */}

              {/* 无法给li加选中class值 active */}
              {/* <li><NavLink to="/" exact={true}>首页</NavLink></li>
              <li><NavLink to="/profile">个人中心</NavLink></li>
              <li><NavLink to="/user">用户</NavLink></li>
              <li><NavLink to="/login">登录</NavLink></li> */}
              
              {/* 外层li加选中class值 active */}
              <MenuLink to="/" exact={true}>首页</MenuLink>
              <MenuLink to="/profile" exact={true}>个人中心</MenuLink>
              <MenuLink to="/user" exact={true}>用户</MenuLink>
              <MenuLink to="/login" exact={true}>登录</MenuLink>
            </ul>
          </div>
        </div>
        <div className="container">
          {/* switch组件 匹配到一个后就不会在继续匹配了 */}
          {/* 默认先匹配一级再匹配二级 */}
          <Switch>
            <Route path="/" exact={true} component={Home}></Route>
            <Protected path="/profile" component={Profile}></Protected>
            <Route path="/user"  component={User}></Route>
            <Route path="/login"  component={Login}></Route>
            <Redirect to="/"></Redirect>
          </Switch>
        </div>
      </div>
    </Router>
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

