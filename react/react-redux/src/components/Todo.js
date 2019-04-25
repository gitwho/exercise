import React from 'react'
import store from '../store/index'
import actions from '../store/actions/todo'


export default class Todo extends React.Component{
  input = React.createRef();
  state = {
    todos: store.getState().todo
  }
  componentWillMount() {
    let unsub = store.subscribe(() => {
      this.setState({
        todos: store.getState().todo
      })
    })
  }


  handleClick() {
    let content = document.getElementById('cont').value;
    
    store.dispatch(actions.addTodo(content))
  }
  render() {
    return (
      <>
        <input id="cont" type="text" ref={this.input}/><button onClick={this.handleClick}>添加</button>
        <ul>
          {this.state.todos.map((item,key) => (
            <li key={key}>{item}</li>
          ))}
          
        </ul>
      </>
    )
  }
}

// export default connect()()