import { Component } from "react";
import { EditorForm, EditorInput, AddButton } from "./TodoEditor.styled";

class TodoEditor extends Component {
  state = {
    textValue: ''
  }

  handleChange = (e) => {
    this.setState({ textValue: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { textValue } = this.state;
    const normalizedText = textValue.trim();
    
    if (normalizedText === '') {
      alert('Введіть текст завдання!');
      return;
    }

    this.props.onSubmit(normalizedText);
    this.reset();
  }

  reset = () => {
    this.setState({ textValue: '' });
  }

  render() {
    const { textValue } = this.state;

    return (
      <EditorForm onSubmit={this.handleSubmit}>
        <EditorInput
          type="text"
          value={textValue}
          onChange={this.handleChange}
          placeholder="Введіть текст завдання"
          autoFocus
        />
        <AddButton type="submit">
          Додати завдання
        </AddButton>
      </EditorForm>
    );
  }
}

export default TodoEditor;