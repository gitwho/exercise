import React,{Component, Fragment} from 'react'
import HomeHeader from './components/HomeHeader';
import HomeSwiper from './components/HomeSwiper';
import {connect} from 'react-redux'
import actions from '@/store/actions/home';
import './index.less'
@connect(state=>state.home, actions)

export default class Home extends Component{
  componentDidMount(){
    this.props.getSliders();
  }
  render() {
    let {category, changeCategory, sliders} = this.props;
    return (
      <Fragment>
        {/* 顶部 */}
        <HomeHeader
          category={category}
          changeCategory={changeCategory}
        />
        <div className="main-content">
          {/* 轮播图 */}
          <HomeSwiper sliders={sliders}/>
        </div>

      </Fragment>
    )
  }
}
