import styled from "styled-components";

export const EditorForm = styled.form`
  display: flex;
  gap: 10px;
  max-width: 600px;
  margin: 0 auto;
  margin-bottom: 20px;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: white;
`;

export const EditorInput = styled.input`
  flex-grow: 1;
  padding: 10px 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: #4CAF50;
    box-shadow: 0 0 5px rgba(76, 175, 80, 0.2);
  }
`;

export const AddButton = styled.button`
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }
`;