import React,{Component} from 'react'
import profile from '@/images/profile.png'
import {Link} from 'react-router-dom'
import NavHeader from '@/components/NavHeader'
import Alert from '@/components/Alert'
import './index.less'
import action from '@/store/actions/session'
import { connect } from 'react-redux';
@connect(state => state.session, action)

export default class Login extends Component{
  handleSubmit = (e) => {
    let username = this.username.value;
    let password = this.password.value;
    this.props.login({username,password}); 
  }
  render() {
    return (
      <div className="login">
        <NavHeader title="登录"/>
        <div className="content">
          <div className="avator">
            <img src={profile}/>
          </div>
          <input ref={ref=>this.username=ref} placeholder="手机号" type="text" />
          <input ref={ref=>this.password=ref} placeholder="密码" type="password" />
          <Link to="/reg">前往注册</Link>
          <button onClick={this.handleSubmit}>登录</button>
          {
            (this.props.success || this.props.error)&&(
              <Alert
                type={this.props.success?'success':'error'}
                message={this.props.success || this.props.error}
              />
            )
            
          }
        </div>
      </div>
    )
  }
}