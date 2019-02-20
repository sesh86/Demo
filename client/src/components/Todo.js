import React, { Component } from 'react';

class Todo extends Component {
  state={todoList:[],newList:''}
  handleChange = (e) => { this.setState({ newList: e.target.value }) }

  addNewList = () => { 
    let l_todoList=this.state.todoList;
    l_todoList.push(this.state.newList)
    this.setState({ todoList: l_todoList }) }

  render() {
    return (
      <div className="p-3 bg-light d-line">
        <input type="text" onChange={this.handleChange} />
        <button onClick={this.addNewList}>Add List</button>
        <TodoList todo={this.state.todoList}></TodoList>
      </div>
    );
  }
}
const TodoList = (props)=>{
    return (<ul>
        {props.todo.map((i)=><li>{i}</li>)}
    </ul>)
}

export default Todo;
