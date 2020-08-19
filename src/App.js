import React from 'react';
import Header from './Components/Header';
import Todos from './Components/Todos';
import AddTodo from './Components/AddTodo';
import { v4 as uuidv4 } from 'uuid';


class App extends React.Component {
    state = {
        todos: [
            {
                id: 1,
                title: 'Finalize on a dress for the wedding',
                completed: false
            },
            {
                id: 2,
                title: 'Contact the bride to make sure she is ready for the wedding',
                completed: false
            },
            {
                id: 3,
                title: 'Schedule hair appointment',
                completed: false
            },
            {
                id: 4,
                title: 'Schedule makeup appointment',
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
        this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] })
    }


    addTodo = (title) => {
        const newTodo = {
            id: uuidv4(),
            title: title,
            completed: false
        }
        this.setState({ todos: [...this.state.todos, newTodo] })
    }


    editTodo = (targetId, targetValue) => {
        const updatedTodos = this.state.todos.map((todo) => {
            if (todo.id === targetId) {
                return { ...todo, title: targetValue }
            } else {
                return todo
            }
        })
        this.setState({ todos: updatedTodos })
    }

    render() {
        return (
            <div>
                <Header />
                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} editTodo={this.editTodo} />
                <AddTodo addTodo={this.addTodo} />
            </div>

        )
    }
}

export default App;
