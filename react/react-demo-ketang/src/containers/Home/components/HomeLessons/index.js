import React, { Component } from 'react'
import Loading from '@/components/Loading'
import './index.less'
import Link from 'react-router-dom';

export default class HomeLessons extends Component {
  render() {
    let {list, hasMore, loading} = this.props.lessons;
    return (
      <div className="home-lesson">
        <div className="all-lessons">
          <i className="iconfont icon-kecheng"></i>
          <span>全部课程</span>
        </div>
        {
          list.length>0?(
            list.map((item, index) => (
              <Link to={{pathname:`/detail`, state: item}}>
                <div className="lesson-list" key={index}>
                  <img src={item.poster} />
                  <p>{item.title}</p>
                  <p>{item.price}</p>
                </div>
              </Link>
            ))
          ):<div className="no-data">暂无数据</div>
        }
        {loading?<Loading/>:(!hasMore&&<div className="loading-more">到底了</div>)}
      </div>
    )
  }
}
