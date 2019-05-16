import React,{Component} from 'react'
import profile from '@/images/profile.png'
import {Link} from 'react-router-dom'
import NavHeader from '@/Components/NavHeader'
import './index.less'
import action from '@/store/actions/session'
import { connect } from 'react-redux';
@connect(state => state.session, action)

export default class Reg extends Component{
  handleSubmit = (e) => {
    let username = this.username.value;
    let password = this.password.value;
    this.props.reg({username,password}); 
  }
  render() {
    return (
      <div className="login">
        <NavHeader title="注册"/>
        <div className="content">
          <div className="avator">
            <img src={profile}/>
          </div>
          <input ref={ref=>this.username=ref} placeholder="手机号" type="text" />
          <input ref={ref=>this.password=ref} placeholder="密码" type="password" />
          <Link to="/login">前往登录</Link>
          <button onClick={this.handleSubmit}>注册</button>
        </div>
      </div>
    )
  }
}