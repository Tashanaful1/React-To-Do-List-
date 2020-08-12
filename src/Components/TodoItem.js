import React from 'react';

class TodoItem extends React.Component {
    getStyle = () => {
        return {
            backgroundColor: '#f0f0f1',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }



    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {''}
                    {title}
                    <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>

                </p>
            </div>
        )
    }
}

const btnStyle = {
    backgroundColor: '#ff4c4c',
    color: 'white',
    border: 'none',
    padding: ' 5px 10px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'

}



export default TodoItem;