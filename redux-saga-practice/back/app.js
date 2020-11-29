const express = require("express");
const app = express();
const port = 8000;

let todos = [
  { id: 1, todo: "공부하기", done: false },
  { id: 2, todo: "숨 쉬기", done: true },
];

app.get("/", (req, res) => {
  res.status(200).json({ todos });
});

app.post("/", (req, res) => {
  const { todo, done } = req.body;
  const biggestIdInTodos = todos.reduce((biggest, todo) => {
    if (todo.id > biggest) return todo.id;
    return biggest;
  }, 0);

  todos = [...todos, { id: biggestIdInTodos + 1, todo, done }];

  res.status(200).json();
});

app.put("/:id", (req, res) => {
  const { id } = req.params;
  const { todo, done } = req.body;

  todos = todos.map((todoItem) => {
    if (todoItem.id !== id) return todo;
    return {
      id,
      todo,
      done,
    };
  });

  res.status(200).json();
});

app.delete("/:id", (req, res) => {
  const { id } = req.params;

  todos = todos.filter((todoItem) => todoItem.id !== id);

  res.status(200).json();
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
