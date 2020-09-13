import React from 'react';
import TodoItems from './TodoItems';


class Todos extends React.Component {
    render() {
        return this.props.todos.map((todo) => (
            <TodoItems todo={todo} />
        ));
    }
}

export default Todos;