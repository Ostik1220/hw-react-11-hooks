import './App.css';
// import { Component, use } from 'react';
import tasks from './todo.json';
import TodoList from './Components/TodoList';
import TodoEditor from './Components/TodoEditor';
import Filter from './Components/Filter';
import { useState } from 'react';

const App = () => {
  // state={
  //   todos: tasks,
  //   filter: '',
  //   onlyDone: false,
  // }
  const [todos, setTodos] = useState(tasks)
  const [filter, setFilter] = useState('')
  const [onlyDone, setOnlyDone] = useState(false)

  // addTodo = (text) => {
  //   const newTodo = {
  //     id: `id-${this.state.todos.length + 1}`,
  //     text,
  //     completed: false,
  //   };
  //     this.setState(prevState => ({
  //     todos: [...prevState.todos, newTodo],
  //   }));
  // }

  const addTodo = (text) => {
    const newTodo = {
      id: `id-${todos.length + 1}`,
      text,
      completed: false,
    };

    setTodos([...todos, newTodo])
  }

  // deleteTodo = (todoId) => {
  //   this.setState(prevState => ({
  //     todos: prevState.todos.filter(todo => todo.id !== todoId)
  //   }));
  // }

    const deleteTodo = (todoId) => {
      setTodos(todos.filter(todo => todo.id !== todoId))
  }

  // handleFilterChange = (value) => {
  //   this.setState({ filter: value });
  // }

    const handleFilterChange = (value) => {
    setFilter(value)
  }

  // handleOnlyDoneChange = (value) => {
  //   this.setState({ onlyDone: value });
  // }

    const handleOnlyDoneChange = (value) => {
    setOnlyDone(value)
  }

  const toggleTodo = (todoId) => {
  setTodos(
    todos.map(todo =>
      todo.id === todoId
        ? { ...todo, completed: !todo.completed }
        : todo
    )
  );
};


    // console.log(this.state.todos);
    console.log(todos);
    

    // const { todos, filter, onlyDone } = this.state;
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
        <TodoEditor onSubmit={addTodo} />
        <Filter
          value={filter}
          onlyDone={onlyDone}
          onFilterChange={handleFilterChange}
          onOnlyDoneChange={handleOnlyDoneChange}
        />
        <TodoList
  todos={visibleTodos}
  onDelete={deleteTodo}
  onToggle={toggleTodo}
/>
      </div>
    );
}

// class App extends Component {
//   state={
//     todos: tasks,
//     filter: '',
//     onlyDone: false,
//   }

//   addTodo = (text) => {
//     const newTodo = {
//       id: `id-${this.state.todos.length + 1}`,
//       text,
//       completed: false,
//     };

//     this.setState(prevState => ({
//       todos: [...prevState.todos, newTodo],
//     }));
//   }

//   deleteTodo = (todoId) => {
//     this.setState(prevState => ({
//       todos: prevState.todos.filter(todo => todo.id !== todoId)
//     }));
//   }

//   handleFilterChange = (value) => {
//     this.setState({ filter: value });
//   }

//   handleOnlyDoneChange = (value) => {
//     this.setState({ onlyDone: value });
//   }

//   render() {
//     console.log(this.state.todos);

//     const { todos, filter, onlyDone } = this.state;
//     const normalizedFilter = filter.toLowerCase();

//     const visibleTodos = todos.filter(todo => {
//       const matchesText = todo.text.toLowerCase().includes(normalizedFilter);
//       if (onlyDone) {
//         return matchesText && todo.completed === true;
//       }
//       return matchesText;
//     });

//     return (
//       <div className="App">
//         <TodoEditor onSubmit={this.addTodo} />
//         <Filter
//           value={filter}
//           onlyDone={onlyDone}
//           onFilterChange={this.handleFilterChange}
//           onOnlyDoneChange={this.handleOnlyDoneChange}
//         />
//         <TodoList todos={visibleTodos} onDelete={this.deleteTodo} />
//       </div>
//     );
//   }
// }
export default App;
