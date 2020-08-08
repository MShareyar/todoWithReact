import React, { Component } from "react";
import "./App.css";
import TodoItem from "./Todos/TodoItem";

class App extends Component {
  state = {
    todos: [
      { id: "1", task: "Laptop Repairing", completed: false },
      { id: "2", task: "React Learning", completed: false },
      { id: "3", task: "Rain Check", completed: true },
      { id: "4", task: "Anyting to do ", completed: false },
    ],
    newTodoItem: "",
  };

  deleteTodoItemHandler = (id) => {
    const updateTodos = [...this.state.todos];
    const todoIndex = updateTodos.findIndex((todo) => todo.id === id);
    updateTodos.splice(todoIndex, 1);
    this.setState({ todos: updateTodos });
  };

  addTodoHandler = (event) => {
    let task = this.state.newTodoItem;

    if (task.length === 0) {
      alert("Invalid Input");
      return;
    }

    let id = Math.random() * 1000;
    const newTodoItem = {
      id: Math.round(id),
      task: task,
      completed: false,
    };

    console.log(newTodoItem);
    const newTodoList = [...this.state.todos, newTodoItem];
    this.setState({ todos: newTodoList });
    this.setState({ newTodoItem: "" });
  };

  updateTaskHandler = (event) => {
    this.setState({ newTodoItem: event.target.value });
  };

  completeTaskHandler = (id) => {
    const updateTodos = [...this.state.todos];
    const todoIndex = updateTodos.findIndex((todo) => todo.id === id);
    updateTodos[todoIndex].completed = !updateTodos[todoIndex].completed;
    this.setState({ todos: updateTodos });
  };

  render() {
    let todos = null;

    if (this.state.todos.length > 0) {
      todos = (
        <div>
          {this.state.todos.map((todo) => {
            return (
              <TodoItem
                task={todo.task}
                key={todo.id}
                completed={todo.completed}
                completeItem={() => this.completeTaskHandler(todo.id)}
                deleteItem={() => this.deleteTodoItemHandler(todo.id)}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>It's a todo app</h1>
        <label> Add Todo : </label>{" "}
        <input
          placeholder="Enter Todo..."
          type="text"
          value={this.state.newTodoItem}
          onChange={this.updateTaskHandler}
        />{" "}
        <input className="btn " type="submit" onClick={this.addTodoHandler} />
        {todos}
      </div>
    );
  }
}

export default App;
