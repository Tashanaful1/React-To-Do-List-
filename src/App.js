import React from "react";
import Header from "./Components/Header";
import Todos from "./Components/Todos";
import AddTodo from "./Components/AddTodo";
import { v4 as uuidv4 } from "uuid";

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Grocery shop for the cabin trip",
        completed: false,
      },
      {
        id: 2,
        title: "Send out invitations",
        completed: false,
      },
      {
        id: 3,
        title: "Book a cabin in Gatlinburg",
        completed: false,
      },
    ],
  };

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };

  AddTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };
  render() {
    return (
      <div>
        <Header />
        <Todos
          todos={this.state.todos}
          markComplete={this.markComplete}
          delTodo={this.delTodo}
        />
        <AddTodo AddTodo={this.AddTodo} />
      </div>
    );
  }
}

export default App;
