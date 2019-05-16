import React,{Component} from 'react'
import profile from '@/images/profile.png'
import {Link} from 'react-router-dom'
import './index.less'

export default class Profile extends Component{
  render() {
    return (
      <div className="profile">
        <div className="avator">
          <img src={profile}/>
          <button className="loginBtn">
            <Link to="/login">登录</Link>
          </button>
        </div>
      </div>
    )
  }
}