import React, { Component } from 'react'
import {Route, Link} from 'react-router-dom'
import Add from "../components/Add"
import List from "../components/List"
import Detail from '../components/Detail'

export default class User extends Component {
  render() {
    return (
      <div>
        <div className="col-md-3">
          <nav className="nav nav-stacked">
            <li><Link to="/user/add">添加用户</Link></li>
            <li><Link to="/user/list">用户列表</Link></li>
          </nav>
        </div>
        <div className="col-md-9">
          <Route path="/user/add" component={Add}></Route>
          <Route path="/user/list" component={List}></Route>
          <Route path="/user/detail/:id" component={Detail}></Route>
        </div>
      </div>
    )
  }
}
