import React,{Component, Fragment} from 'react'
import HomeHeader from './components/HomeHeader';
import HomeSwiper from './components/HomeSwiper';
import HomeLessons from './components/HomeLessons'
import {connect} from 'react-redux'
import actions from '@/store/actions/home';
import './index.less'
import { loadMore } from '@/util';
// this.props = {...state.home, ...actions}
@connect(state=>state.home, actions)

export default class Home extends Component{
  componentDidMount(){
    this.props.getSliders();
    this.props.getLessons();
    loadMore(this.mainContent, this.props.getLessons)
  }
  render() {
    let {category, changeCategory, sliders, lessons} = this.props;
    console.log(this.props)
    return (
      <Fragment>
        {/* 顶部 */}
        <HomeHeader
          category={category}
          changeCategory={changeCategory}
        />
        <div className="main-content" ref={ref => this.mainContent=ref}>
          {/* 轮播图 */}
          <HomeSwiper sliders={sliders}/>
          {/* 列表 */}
          <HomeLessons lessons= {lessons}
          />
        </div>

       

      </Fragment>
    )
  }
}
