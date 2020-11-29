import React from "react";
import styled from "styled-components";

const AddTodoInput = styled.input`
  margin-bottom: 10px;
  padding: 10px;

  width: 200px;
`;
function AddTodo() {
  return <AddTodoInput placeholder="할일을 입력해보세요" />;
}

export default AddTodo;
