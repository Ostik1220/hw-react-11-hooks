import './App.css';
import { Component } from 'react';
import tasks from './todo.json';
import TodoList from './Components/TodoList';

class App extends Component {
  state={
    todos: tasks,
    filter: '',
  }
  render() {
    console.log(this.state.todos);
  return (
    <div className="App">
      <TodoList props={this.state.todos}/>
    </div>
  );
  }
}
export default App;
