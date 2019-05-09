import React,{Component, Fragment} from 'react'
import HomeHeader from './HomeHeader';
import {connect} from 'react-redux'
<<<<<<< HEAD
import actions from '@/store/actions/home';

@connect(state=>state.home, actions)
=======
// import actions from '';

@connect(state=>state.home)
>>>>>>> 0838e1b400baf3fbc63bed0b60bbe82e030e58a7
export default class Home extends Component{
  render() {
    return (
      <Fragment>
<<<<<<< HEAD
        <HomeHeader
          changeCategory={this.props.changeCategory}
        />
=======
        <HomeHeader />
>>>>>>> 0838e1b400baf3fbc63bed0b60bbe82e030e58a7
      </Fragment>
    )
  }
}
