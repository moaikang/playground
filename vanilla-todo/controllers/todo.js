const TodoModel = require("../models/todo");
const TodoView = require("../views/todosView");

class TodoController {
  constructor() {
    this.model = new TodoModel();
    this.view = new TodoView();

    this.view.playEvent.addListener((move) => {
      this.model.play(move);
    });

    this.model.updateCellEvent.addListener((data) => {
      this.view.updateCell(data);
    });
    this.model.victoryEvent.addListener((winner) => {
      this.view.victory(winner);
    });
    this.model.drawEvent.addListener(() => {
      this.view.draw();
    });
  }

  run() {
    this.view.render();
  }
}

export default TodoController;
