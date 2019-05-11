import React, { Component } from 'react'
import ReactSwipe from 'react-swipe'
import './index.less'
export default class HomeSwiper extends Component {
  render() {
    let swipeOptions={
      continuous: true
    }
    let {sliders} = this.props;
    return (
      <div className="home-swipe">
        {
          sliders.length>0?(
            <ReactSwipe className="carousel" swipeOptions={swipeOptions}>
              {
                sliders.map((item, index) => (
                  <div key={index}>
                    <img src={item} />
                  </div>
                ))
                
              }
            </ReactSwipe>
          ):null
        }
      </div>
    )
  }
}
