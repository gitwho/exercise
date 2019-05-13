import React, { Component } from 'react'
import ReactSwipe from 'react-swipe'
import './index.less'
export default class HomeSwiper extends Component {
  state = {
    index: 0
  }
  render() {
    let options={
      // auto: 1000,
      // continuous: true,
      callback: (index) => {
        this.setState({index});
        console.log(index)
      }
    }
    let {sliders} = this.props;
    return (
      <div className="home-swipe">
        {
          sliders.length>0?(
            <ReactSwipe className="carousel" swipeOptions={options}>
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
        {/* dots */}
        <div className="dots">
          {
            sliders.map((item, index) => (
              <span className={`dot ${index == this.state.index ? "active":''}`} key={index}></span>
            ))
          }
        </div>
      </div>
    )
  }
}
