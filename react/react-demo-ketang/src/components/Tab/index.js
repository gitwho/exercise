import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import './index.less'
export default class Tab extends Component{
  render() {
    return (
      <div className="tab">
        <NavLink to="/" exact activeClassName="active">
          <i className="iconfont icon-xingqiu-"></i>
          首页
        </NavLink>
        <NavLink to="/mine" activeClassName="active">
          <i className="iconfont icon-react"></i>
          我的课程
        </NavLink>
        <NavLink to="/profile" activeClassName="active">
          <i className="iconfont icon-xiaolian"></i>
          个人中心
        </NavLink>
      </div>
    )
  }
}