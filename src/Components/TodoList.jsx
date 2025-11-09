import { StyledList } from "./TodoList.styled";
// import { StyledItem } from "./TodoList.styled";
import { Component } from "react";

class TodoList extends Component {
state = {
    todos: this.props,
}  

checkboxChange = (e) => {
    console.log(e.target.parentElement.id);
}

  render() {
    const listOfTodos = this.state.todos.props.map((todo) => (
      <li key={todo.id} id={todo.id}>
        <input type="checkbox" value={todo.completed}  key={todo.id} onChange={this.checkboxChange}/>
        <p>{todo.text}</p>
        <button>Delete</button>
        </li>    
        ));
    console.log(this.state.todos);
    return <StyledList>{listOfTodos}</StyledList>;
  }
}

export default TodoList;