import { Component } from "react";
import { EditorForm, EditorInput, AddButton } from "./TodoEditor.styled";
import { useState } from "react";

const TodoEditor = ( {onSubmit} ) => {
  // state = {
  //   textValue: ''
  // }

  const [text, setText] = useState('')

  // handleChange = (e) => {
  //   this.setState({ textValue: e.target.value });
  // }

  const handleChange = (e) => {
    setText(e.target.value)
  }

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   const { textValue } = this.state;
  //   const normalizedText = textValue.trim();
    
  //   if (normalizedText === '') {
  //     alert('Введіть текст завдання!');
  //     return;
  //   }

  //   this.props.onSubmit(normalizedText);
  //   this.reset();
  // }

    const handleSubmit = (e) => {
    e.preventDefault();
    const normalizedText = text.trim();
    console.log(textValue)
    if (normalizedText === '') {
      alert('Введіть текст завдання!');
      return;
    }

    onSubmit(normalizedText);
    reset();
  }

  // reset = () => {
  //   this.setState({ textValue: '' });
  // }

   const reset = () => {
    setText('');
  }


    const { textValue } = text;

    return (
      <EditorForm onSubmit={handleSubmit}>
        <EditorInput
          type="text"
          value={textValue}
          onChange={handleChange}
          placeholder="Введіть текст завдання"
          autoFocus
        />
        <AddButton type="submit">
          Додати завдання
        </AddButton>
      </EditorForm>
    );

  }


export default TodoEditor;

// class TodoEditor extends Component {
//   state = {
//     textValue: ''
//   }

//   handleChange = (e) => {
//     this.setState({ textValue: e.target.value });
//   }

//   handleSubmit = (e) => {
//     e.preventDefault();
//     const { textValue } = this.state;
//     const normalizedText = textValue.trim();
    
//     if (normalizedText === '') {
//       alert('Введіть текст завдання!');
//       return;
//     }

//     this.props.onSubmit(normalizedText);
//     this.reset();
//   }

//   reset = () => {
//     this.setState({ textValue: '' });
//   }

//   render() {
//     const { textValue } = this.state;

//     return (
//       <EditorForm onSubmit={this.handleSubmit}>
//         <EditorInput
//           type="text"
//           value={textValue}
//           onChange={this.handleChange}
//           placeholder="Введіть текст завдання"
//           autoFocus
//         />
//         <AddButton type="submit">
//           Додати завдання
//         </AddButton>
//       </EditorForm>
//     );
//   }
// }

// export default TodoEditor;