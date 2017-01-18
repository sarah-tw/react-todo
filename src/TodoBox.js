import React, { Component } from 'react';

class TodoBox extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.state = {
      todos: [
        {done: false, name: "learn react"},
        {done: true, name: "learn angularjs"},
        {done: false, name: "learn backbone"},
      ],
      text: ''
    };
  }
  addTodo(todo){
    this.setState((prevState) => ({
      todos: prevState.todos.concat(todo),
      text: ''
    }));
  }
  handleSubmit(e) {
    e.preventDefault();
    let todo = {
      done: false,
      name: this.state.text
    }
    this.addTodo(todo);
  }
  clickHandler(index) {
    this.setState((prevState) => {
      prevState.todos.map((v, i) => {
        if (i === index) v.done = !v.done;
        return v;
      })
    });
  }
  removeTodo(index) {
    const newTodo = this.state.todos.filter((v, i) => {
      return i!==index;
      })
    this.setState({todos: newTodo});
  }

  onChangeHandler(event) {
    this.setState({text: event.target.value});
  }
  render() {
    return (
      <div className="todo-box">
        <h2>{this.state.todos.length} todo</h2>
        <ul>
          {this.state.todos.map((todo, index) => {
            return <li key={index} className={todo.done? "done" : ""} >
              <input type="checkbox" defaultChecked={todo.done} onClick={() => this.clickHandler(index)} />
              <span>{todo.name}</span>
              <span className="remove"  onClick={() => this.removeTodo(index)} >X</span>
            </li>
          })}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.text} onChange={this.onChangeHandler} placeholder="New Todo" onKeyDown={this.keyDownHandler}/>
        </form>
      </div>
    );
  }
}

export default TodoBox;
