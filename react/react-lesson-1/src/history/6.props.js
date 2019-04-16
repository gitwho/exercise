import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

// 写一个组件， 需要校验属性（校验实例上的属性）

class Person extends React.Component{
  // 默认属性 名字必须叫 defaultProps 属于类上的属性 es7
  static defaultProps = { 
    name: 'px'
  }
  // propTypes就是专门校验类型的,
  // 会在console 报错，不会阻止程序运行
  static propTypes = {
    age: PropTypes.number.isRequired,
    gender: PropTypes.oneOf(['男', '女']),
    position: PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number
    }),
    hobby: PropTypes.arrayOf(PropTypes.string),
    salary(props, propName, componentName) {
      if (props[propName] < 10000) {
        throw new Error('收益低')
      }
    }

  }
  render() {
    return <div>
      haw {this.props.name}
    </div>
  }
}

let obj = {
  
  age: 1,
  gender: '男',
  position: {
    x: 100,
    y: 100
  },
  salary: 1000,
  hobby: ['写代码']
}

ReactDOM.render(<Person {...obj} />, window.root);