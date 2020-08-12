import React from 'react';
import Todos from './Components/Todos';
import Header from './Components/Header';
import TodoItem from './Components/TodoItem';
import AddTodo from './Components/AddTodo';
import './App.css';


class App extends React.Component {

  state = {
    todos: [
      {
        id: 1,
        title: 'Set hair appointment',
        completed: false
      },
      {
        id: 2,
        title: 'Set make up appointment',
        completed: false
      },
      {
        id: 3,
        title: 'Order shoes for the wedding',
        completed: false
      },
      {
        id: 4,
        title: 'Order a gift from the wedding registry',
        completed: false
      }
    ]
  }

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    })

  }
  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  }

  addTodo = (title) => {


    const newTodo = {
      id: 5,
      title: title,
      completed: false,
    }
    this.setState({ todos: [...this.state.todos, newTodo] })


  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <Todos todos={this.state.todos} markComplete={this.markComplete}
            delTodo={this.delTodo} />
          <AddTodo addTodo={this.addTodo} />

        </div>

      </div>
    )
  }
}





export default App;
