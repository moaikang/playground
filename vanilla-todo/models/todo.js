const Event = require("../lib/event");

class Todo {
  constructor() {
    this.todos = [];
    this.nextId = 1;

    this.addTodoEvent = new Event();
    this.removeTodoEvent = new Event();
    this.updateTodoEvent = new Event();
  }

  addTodo(todo) {
    todo = { ...todo, id: this.nextId };
    this.todos = [...this.todos, todo];
    this.nextId += 1;

    this.addTodoEvent.trigger();
  }

  removeTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);

    this.removeTodoEvent.trigger();
  }

  updateTodo(id, newTodo) {
    newTodo = { ...newTodo, id };
    this.todos = this.todos.reduce((updatedTodos, todo) => {
      if (todo.id === id) {
        return [...updatedTodos, newTodo];
      }
      return [...updatedTodos, todo];
    }, []);

    this.updateTodoEvent.trigger();
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
