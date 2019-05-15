import React,{Component} from 'react'
import './index.less'
import {withRouter} from 'react-router-dom'
class NavHeader extends Component{
  render() {
    return (
      <div className="navheader">
        <span className="back"
          onClick={() => this.props.history.goBack()}
          >返回</span>
        {this.props.title}
      </div>
    )
  }
}

export default  withRouter(NavHeader);