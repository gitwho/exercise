import React,{Component, Fragment} from 'react'
import HomeHeader from './HomeHeader';
import {connect} from 'react-redux'
// import actions from '';

@connect(state=>state.home)
export default class Home extends Component{
  render() {
    return (
      <Fragment>
        <HomeHeader />
      </Fragment>
    )
  }
}
