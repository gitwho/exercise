import React, { Component } from 'react'
import './index.less'

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
          list.map((item, index) => (
            <div className="lesson-list" key={index}>
              <img src={item.poster} />
              <p>{item.title}</p>
              <p>{item.price}</p>
            </div>
          ))
        }
      </div>
    )
  }
}
