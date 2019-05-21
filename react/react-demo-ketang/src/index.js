import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import {Route, Switch} from 'react-router-dom'
import Home from '@/containers/Home'
import Mine from '@/containers/Mine'
import Profile from '@/containers/Profile'
import Layout from '@/containers/Layout'
import Detail from '@/containers/Detail'
import Login from '@/containers/Login'
import Reg from '@/containers/Reg'
import PrivateRoute from '@/components/PrivateRoute'

import store from './store'
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'connected-react-router'
import history from './history'

class App extends Component{
  render() {
    return (
      <ConnectedRouter history={history}>
        <Layout>
          <Switch>
            <Route path="/" exact={true} component={Home}></Route>
            <PrivateRoute path="/mine" component={Mine}></PrivateRoute>
            <PrivateRoute path="/profile" component={Profile}></PrivateRoute>
            <Route path="/detail/:id" component={Detail}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/reg" component={Reg}></Route>
          </Switch>
        </Layout>
      </ConnectedRouter>
      
    )
  }
}
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  
, document.getElementById('root'));