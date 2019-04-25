import React from 'react'
import store from '../store//index'
import actions from '../store/actions/todo'
import {connect} from 'react-redux'

class Todo extends React.Component{
  input = React.createRef();
  // state = {
  //   todos: store.getState().todo
  // }
  // componentWillMount() {
  //   let unsub = store.subscribe(() => {
  //     this.setState({
  //       todos: store.getState().todo
  //     })
  //   })
  // }


  handleClick = () => {    
    this.props.addTodo(this.input.current.value)
  }
  render() {
    return (
      <div>
        <input id="cont" type="text" ref={this.input}/><button onClick={this.handleClick}>添加</button>
        <ul>
          {this.props.todos.map((item,key) => (
            <li key={key}>{item}</li>
          ))}
        </ul>
      </div>
    )
  }
}

let mapStateToProps = (state) => { // state-> store.getState()
  return {
    todos: state.todo
  }
}
let mapDispatchToProps = (dispatch) => { // dispatch-> store.dispatch
  return {
    addTodo: (todo) => dispatch(actions.addTodo(todo))
  }
}
// export default connect(mapStateToProps, mapDispatchToProps)(Todo)
export default connect((state) => ({todos: state.todo}), actions)(Todo)
