import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class List extends Component {
  state = {
    lists: []
  }
  componentWillMount() {
    let lists = JSON.parse(localStorage.getItem('user')) || [];
    this.setState({
      lists
    })
  }
  render() {
    
    return (
      <ul className="list-group">
        {this.state.lists.map((item, index) => (
          <li className="list-group-item" key={index}>
            <Link to={'/user/detail/' + item.id}>{item.name}</Link>
          </li>
        )) }   
      </ul>
    )
  }
}
