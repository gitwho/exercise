import React, { Component } from 'react'

import './index.less'

// detail 是由路由渲染出来的话，会有三个属性 history location match
export default class Detail extends Component {
  render() {
    let lesson = this.props.location.state;
    return (
      <div className="lesson-detail">
        <img src={lesson.poster}/>
        <p>{lesson.title}</p>
        <p>{lesson.price}</p>
      </div>
    )
  }
}
