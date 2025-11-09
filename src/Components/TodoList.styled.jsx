import styled from "styled-components";

export const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border: 1px solid #000000ff;
  `;

  export const StyledItem = styled.li`
  display: flex;
    align-items: center;
    padding: 8px;
    border-bottom: 1px solid #ddd;
`;