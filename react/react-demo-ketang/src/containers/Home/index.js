import React,{Component, Fragment} from 'react'
import HomeHeader from './components/HomeHeader';
import HomeSwiper from './components/HomeSwiper';
import HomeLessons from './components/HomeLessons'
import {connect} from 'react-redux'
import actions from '@/store/actions/home';
import './index.less'
import { loadMore, downRefresh } from '@/util';
// this.props = {...state.home, ...actions}
@connect(state=>state.home, actions)

export default class Home extends Component{
  componentDidMount(){
    console.log('+',this.props)
    this.props.getSliders();
    this.props.getLessons();
    loadMore(this.mainContent, this.props.getLessons)
    downRefresh(this.mainContent, this.props.refreshLessons)
  }
  render() {
    let {category, changeCategory, sliders, lessons, refreshLessons} = this.props;
    console.log(this.props)
    return (
      <Fragment>
        {/* 顶部 */}
        <HomeHeader
          category={category}
          changeCategory={changeCategory}
          refreshLessons={refreshLessons}
        />
        <div className="main-content" ref={ref => this.mainContent=ref}>
          {/* 轮播图 */}
          <HomeSwiper sliders={sliders}/>
          {/* 列表 */}
          <HomeLessons lessons= {lessons}
          getLessons={this.props.getLessons}
          />
        </div>

      </Fragment>
    )
  }
}
