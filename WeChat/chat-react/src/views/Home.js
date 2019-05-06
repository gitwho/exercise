import React, { Component } from 'react'
import Nav from './Nav'
import Chat from './Chat'

import '../style/home.styl'

export default class Home extends Component {
  render() {
    return (
      <div className="container">
        {/* 左边 */}
        <Nav></Nav>
        {/* 右边 */}
        <Chat></Chat>
      </div>
    )
  }
}

