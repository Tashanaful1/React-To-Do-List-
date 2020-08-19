import React from 'react';



class TodoItem extends React.Component {
    getStyle = () => {
        return {
            backgroundColor: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ?
                'line-through' : 'none'

        }

    }


    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type='checkbox' onChange={this.props.markComplete.bind
                        (this, id)} /> {''}
                    {title}
                    <button style={editStyle} onClick={this.props.editTodo.bind(this, id)}>Edit</button>
                    <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>

                </p>

            </div>
        )

    }
}

const btnStyle = {
    color: 'white',
    backgroundColor: 'red',
    padding: '5px 8px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}


const editStyle = {
    float: 'right',
    backgroundColor: 'yellow',
    padding: '5px',
    color: 'black',
    borderRadius: '50%'
}


export default TodoItem;