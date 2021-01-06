const { describe } = require("@jest/globals");
const Todo = require("../../models/todo");

describe("Todo Test", () => {
  test("Add Todo", () => {
    // Given
    const data = new Todo();

    // When
    data.addTodo({ name: "test1", done: false });
    const result = data.getTodos();

    // Then
    expect(result).toEqual([{ id: 1, name: "test1", done: false }]);
  });

  test("Remove Todo", () => {
    // Given
    const data = new Todo();

    // When
    data.addTodo({ name: "test1", done: false });
    data.removeTodo(1);
    const result = data.getTodos();

    // Then
    expect(result).toEqual([]);
  });

  test("Update Todo", () => {
    // Given
    const data = new Todo();

    // When
    data.addTodo({ name: "test1", done: false });
    data.updateTodo(1, { name: "fixed test1", done: false });
    const result = data.getTodos();

    // Then
    expect(result).toEqual([{ id: 1, name: "fixed test1", done: false }]);
  });

  test("Get todo that does not exist", () => {
    // Given
    const data = new Todo();

    // When
    data.addTodo({ name: "test1", done: false });
    const result = data.getTodo(2);

    // Then
    expect(result).toEqual(null);
  });
});
