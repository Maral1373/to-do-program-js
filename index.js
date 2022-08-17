class Todo {
  constructor() {
    this.todos = [];
  }
  add(todo) {
    this.todos.push({
      name: todo,
      status: false,
    });
  }
  changeStatus(todo) {
    const selectedToDoIndex = this.todos.findIndex((i) => i.name === todo);
    this.todos[selectedToDoIndex].status =
      !this.todos[selectedToDoIndex].status;
  }
  list() {
    return this.todos;
  }
  listDone() {
    console.log("Done");
    return this.todos.filter((i) => i.status === true).map(j => j.name);
  }
  
  listPending() {
    console.log("Pending");
    return this.todos.filter((i) => i.status === false).map(k => k.name);
  }
}

const app = new Todo();
app.add("mesvak zadan");
app.add("boos dadan");

app.changeStatus(`boos dadan`);
console.log(app.list());
console.log(app.listDone());
console.log(app.listPending());
