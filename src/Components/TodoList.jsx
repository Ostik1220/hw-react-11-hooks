import { StyledList, StyledItem } from "./TodoList.styled";
// import {  } from "./TodoList.styled";
import { Component } from "react";

const TodoList = ({todos, onDelete, onToggle}) => {

  // handleDelete = (todoId) => {
  //   this.props.onDelete(todoId);
  // }

    const handleDelete = (todoId) => {
    onDelete(todoId);
  }




    const listOfTodos = todos.map((todo) => {
      if (todo.completed === true) {
        return (
        <StyledItem key={todo.id} id={todo.id}>
          <input 
            type="checkbox" 
            checked
            onChange={() => onToggle(todo.id)}
          />
          <p>{todo.text}</p>
          <button onClick={() => handleDelete(todo.id)}>Видалити</button>
        </StyledItem>
        )
    } else {
        return (
        <StyledItem key={todo.id} id={todo.id}>
          <input 
            type="checkbox"
            onChange={() => onToggle(todo.id)}
          />
          <p>{todo.text}</p>
          <button onClick={() => handleDelete(todo.id)}>Видалити</button>
        </StyledItem>
        );
    }
    });


    console.log(todos);
    return <StyledList>{listOfTodos}</StyledList>;
  }


// class TodoList extends Component {
//   handleDelete = (todoId) => {
//     this.props.onDelete(todoId);
//   }

//   CheckedChekcbox = (e) => {
//     console.log(e.target.parentElement.id);
//   }

//   render() {
//     const listOfTodos = this.props.todos.map((todo) => {
//       if (todo.completed === true) {
//         return (
//         <StyledItem key={todo.id} id={todo.id}>
//           <input 
//             type="checkbox" 
//             checked
//             onChange={this.CheckedChekcbox}
//           />
//           <p>{todo.text}</p>
//           <button onClick={() => this.handleDelete(todo.id)}>Видалити</button>
//         </StyledItem>
//         )
//     } else {
//         return (
//         <StyledItem key={todo.id} id={todo.id}>
//           <input 
//             type="checkbox"
//             onChange={this.CheckedChekcbox}
//           />
//           <p>{todo.text}</p>
//           <button onClick={() => this.handleDelete(todo.id)}>Видалити</button>
//         </StyledItem>
//         );
//     }
//     });


//     console.log(this.props.todos);
//     return <StyledList>{listOfTodos}</StyledList>;
//   }
// }

export default TodoList;