import React from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div>
      <h1>뭐 할때마다 만드는 TodoList</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
