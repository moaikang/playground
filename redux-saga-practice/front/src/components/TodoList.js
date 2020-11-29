import React, { useState } from "react";
import TodoItem from "./TodoItem";

function TodoList() {
  const [tempTodos, setTempTodos] = useState([
    { id: 1, todo: "공부하기", done: false },
    { id: 2, todo: "숨 쉬기", done: true },
  ]);
  return (
    <div>
      {tempTodos.map((tempTodo) => (
        <TodoItem key={tempTodo.id} done={tempTodo.done}>
          {tempTodo.todo}
        </TodoItem>
      ))}
    </div>
  );
}

export default TodoList;
