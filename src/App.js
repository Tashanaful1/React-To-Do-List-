import React from 'react';
import Header from './Components/Header';
import TodoItems from './Components/TodoItems';
import Todos from './Components/Todos';
import AddTodo from './Components/AddTodo';


class App extends React.Component {
    state = {
        todos: [

            {
                id: 1,
                title: 'Go to the car wash',
                completed: false

            },
            {
                id: 2,
                title: 'Clean out the car',
                completed: false

            },
            {
                id: 3,
                title: 'Replace the bulb in the headlight',
                completed: false

            },
            {
                id: 4,
                title: 'File a warranty claim for the radio',
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
                //I am not sure why I have to return something 
                return todo;
            })
        })

    }

    delTodo = (id) => {
        this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });

    }


    addTodo = (title) => {
        const newTodo = {
            id: 5,
            title: title,
            completed: false
        }
        this.setState({ todos: [...this.state.todos, newTodo] });

    }

    /* editTodo=(targetId,targetValue)=>{
         const updatedTodos = this.state.todos.map((todo)=>{
             if(todo.id === targetId){
                 return {...todo,title: targetValue}
             } else {
                 return todo;
             }
         })
         this.state({todos:updatedTodos});
 
     }*/

    render() {
        return (
            <div>
                <Header />
                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
                <AddTodo addTodo={this.addTodo} />
            </div>
        )
    }
}



export default App;