import React, { Component } from 'react'
import NavHeader from '@/components/NavHeader'
import './index.less'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import actions from '@/store/actions/home';
@connect(state=>state.home, actions)

// detail 是由路由渲染出来的话，会有三个属性 history location match
export default class Detail extends Component {
  state = {
    lesson: this.props.location.state || {}
  }

  componentDidMount() {
    console.log('qw+' ,this.props);
    
    let lesson = this.state.lesson;
    
    if (!lesson || !lesson.title) {
      let id = this.props.match.params.id;
      this.props.getDetails(id);
      console.log('223',this.props);
    }
    
  }
  render() {
    let {lesson} = this.state;
    if(!lesson || !lesson.title){
      console.log('xcdf');
      lesson = this.props.detail;
    }
    
    console.log('df',this.props)
    // let {category, changeCategory, sliders, lessons, refreshLessons} = this.props;
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
