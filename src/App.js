import React, { Component } from 'react';
import TodoBox from './TodoBox';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
    this.state = {showToDo: false};
  }
  clickHandler() {
    this.setState({showToDo: !this.state.showToDo});
  }

  render() {
    return (
      <div>
       <button className="todo-btn" onClick={this.clickHandler}>To Do</button>
       {this.state.showToDo && <TodoBox />}
      </div>
    );
  }
}

export default App;
