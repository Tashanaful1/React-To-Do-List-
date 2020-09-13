import React from 'react';



class TodoItems extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.todo.title}</p>
            </div>

        )
    }

}


export default TodoItems;