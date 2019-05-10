import React, { Component } from 'react'
import ReactSwipe from 'react-swipe'
export default class HomeSwiper extends Component {
  render() {
    let swipeOptions={
      continuous: true
    }
    return (
      <div className="home-swipe">
        <ReactSwipe className="carousel" swipeOptions={swipeOptions}>
          <div>one</div>
          <div>two</div>
          <div>three</div>
        </ReactSwipe>
      </div>
    )
  }
}
