import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import Home from '@/containers/Home'
import Mine from '@/containers/Mine'
import Profile from '@/containers/Profile'
ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" Component={Home}></Route>
      <Route path="/mine" Component={Mine}></Route>
      <Route path="/profile" Component={Profile}></Route>
    </Switch>
  </Router>
, document.querySelector('#root'));