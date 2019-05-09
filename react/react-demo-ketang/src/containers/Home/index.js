import React,{Component, Fragment} from 'react'
import HomeHeader from './HomeHeader';
import {connect} from 'react-redux'
import actions from '@/store/actions/home';

@connect(state=>state.home, actions)

export default class Home extends Component{
  render() {
    return (
      <Fragment>

        <HomeHeader
          changeCategory={this.props.changeCategory}
        />
        <HomeHeader />
      </Fragment>
    )
  }
}
