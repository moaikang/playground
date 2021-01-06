class Todo {
  constructor() {
    this.todos = [];
    this.nextId = 1;
  }

  addTodo(todo) {
    todo = { ...todo, id: this.nextId };
    this.todos = [...this.todos, todo];
    this.nextId += 1;
  }

  removeTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  updateTodo(id, newTodo) {
    newTodo = { ...newTodo, id };
    this.todos = this.todos.reduce((updatedTodos, todo) => {
      if (todo.id === id) {
        return [...updatedTodos, newTodo];
      }
      return [...updatedTodos, todo];
    }, []);
  }

  getTodo(id) {
    const [todo] = this.todos.filter((todo) => todo.id === id);
    return todo !== undefined ? todo : null;
  }

  getTodos() {
    return this.todos;
  }
}

module.exports = Todo;
