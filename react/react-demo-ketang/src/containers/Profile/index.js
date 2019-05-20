import React,{Component} from 'react'
import profile from '@/images/profile.png'
import {Link} from 'react-router-dom'
import './index.less'
import {connect} from 'react-redux'
@connect(state => state.session)

export default class Profile extends Component{
  render() {
    console.log(this.props);
    return (
      <div className="profile">
        <div className="avator">
          <img src={profile}/>
          {
            this.props.a?<a>{this.props.a[0].username}</a>:(<button className="loginBtn">
            <Link to="/login">登录</Link>
          </button>)
          }
          
        </div>
      </div>
    )
  }
}