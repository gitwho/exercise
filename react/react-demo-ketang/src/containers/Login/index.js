import React,{Component} from 'react'
import profile from '@/images/profile.png'
import {Link} from 'react-router-dom'
import NavHeader from '@/components/NavHeader'
import './index.less'

export default class Login extends Component{
  render() {
    return (
      <div className="login">
        <NavHeader title="登录"/>
        <div className="content">
          <div className="avator">
            <img src={profile}/>
          </div>
          <input placeholder="手机号" type="text" />
          <input placeholder="密码" type="password" />
          <Link to="/reg">前往注册</Link>
          <button >登录</button>
        </div>
      </div>
    )
  }
}