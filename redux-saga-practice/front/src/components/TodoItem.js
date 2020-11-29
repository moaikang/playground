import React from "react";
import styled from "styled-components";

const TodoItemWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const TodoContent = styled.div`
  margin-left: 15px;
  margin-right: 15px;

  font-size: 1.5rem;
  font-weight: 700;

  text-decoration: ${(props) => (props.done ? "line-through" : "none")};
`;

function TodoItem({ children, done }) {
  return (
    <TodoItemWrapper>
      <input type="checkbox" checked={done} />
      <TodoContent done={done}>{children}</TodoContent>
      <button>삭제</button>
    </TodoItemWrapper>
  );
}

export default TodoItem;
