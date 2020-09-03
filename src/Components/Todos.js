import React from 'react';
import TodoItems from './TodoItems';


class Todos extends React.Component {
    render() {
        return this.props.todos.map((todo) => (
            <TodoItems key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo} addTodo={this.props.addTodo} />
        ));
    }
}

export default Todos;