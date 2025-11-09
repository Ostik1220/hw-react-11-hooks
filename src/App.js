import './App.css';
import { Component } from 'react';
import tasks from './todo.json';
import TodoList from './Components/TodoList';
import TodoEditor from './Components/TodoEditor';
import Filter from './Components/Filter';

class App extends Component {
  state={
    todos: tasks,
    filter: '',
    onlyDone: false,
  }

  addTodo = (text) => {
    const newTodo = {
      id: `id-${this.state.todos.length + 1}`,
      text,
      completed: false,
    };

    this.setState(prevState => ({
      todos: [...prevState.todos, newTodo],
    }));
  }

  deleteTodo = (todoId) => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId)
    }));
  }

  handleFilterChange = (value) => {
    this.setState({ filter: value });
  }

  handleOnlyDoneChange = (value) => {
    this.setState({ onlyDone: value });
  }

  render() {
    console.log(this.state.todos);

    const { todos, filter, onlyDone } = this.state;
    const normalizedFilter = filter.toLowerCase();

    const visibleTodos = todos.filter(todo => {
      const matchesText = todo.text.toLowerCase().includes(normalizedFilter);
      if (onlyDone) {
        return matchesText && todo.completed === true;
      }
      return matchesText;
    });

    return (
      <div className="App">
        <TodoEditor onSubmit={this.addTodo} />
        <Filter
          value={filter}
          onlyDone={onlyDone}
          onFilterChange={this.handleFilterChange}
          onOnlyDoneChange={this.handleOnlyDoneChange}
        />
        <TodoList todos={visibleTodos} onDelete={this.deleteTodo} />
      </div>
    );
  }
}
export default App;
