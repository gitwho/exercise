import React, { Component } from 'react'
import NavHeader from '@/components/NavHeader'
import './index.less'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import actions from '@/store/actions/home';
@connect(states=>{console.log('c',state); ;state.home}, actions)

// detail 是由路由渲染出来的话，会有三个属性 history location match
export default class Detail extends Component {
  state = {
    lesson: this.props.location.state || {}
  }

  componentDidMount() {
    console.log('qw+' ,this.props);
    console.log('qw+' ,this.state);
    let lesson = this.state.lesson;
    
    if (!lesson || !lesson.title) {
      let id = this.props.match.params.id;
      console.log(id);
      this.props.getDetails(id);
      console.log('223',this.props);
    }
    
  }
  render() {
    // let {lesson} = this.props;
    // console.log('df',lesson)
    let lesson = 'a'
    return (
      lesson?(
      <div className="lesson-detail">
        <NavHeader title="课程详情" />
        <img src={lesson.poster}/>
        <p>{lesson.title}</p>
        <p>{lesson.price}</p>
      </div>
      ):<Redirect to="/" />
    )
  }
}
