import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import Home from '@/containers/Home'
import Mine from '@/containers/Mine'
import Profile from '@/containers/Profile'
import Layout from '@/containers/Layout'
import Detail from '@/containers/Detail'
import store from './store'
import {Provider} from 'react-redux'

class App extends Component{
  render() {
    return (
      <Router>
        <Layout>
          <Switch>
            <Route path="/" exact={true} component={Home}></Route>
            <Route path="/mine" component={Mine}></Route>
            <Route path="/profile" component={Profile}></Route>
            <Route path="/detail/:id" component={Detail}></Route>
          </Switch>
        </Layout>
      </Router>
      
    )
  }
}
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  
, document.getElementById('root'));