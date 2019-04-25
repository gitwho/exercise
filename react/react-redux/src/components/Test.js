import React from 'react'

export default class Test extends React.Component {
  render() {
    console.log(this.props.children);
    return <div>
      {React.Children.map(this.props.children, (child, index) => {
        return <li>{child}</li>
      })}
    </div>
  }
}