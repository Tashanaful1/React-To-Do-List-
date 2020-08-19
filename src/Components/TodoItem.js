import React from 'react';

// ON USER CLIKING EDITING BUTTON ALLOW TEXT TO BE EDITABLE 
// USER TO EDIT THE TEXT
// SAVE BUTTON 
//ONCLICKING BTN, THE CHANGES SHOULD BE UPDATED ON TODO 

class TodoItem extends React.Component {
    state = {
        isEditing: false,
        editingValue: ''

    }


    getStyle = () => {
        return {
            backgroundColor: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ?
                'line-through' : 'none'

        }

    }
    // when user clicks edit button
    isEditingToggler = (value) => {
        this.setState({ isEditing: true, editingValue: value })

    }
    //updates the input when user types 
    onChangeHandler = (e) => {
        this.setState({ editingValue: e.target.value })

    }
    saveEditHandler = (id, editingValue) => {
        this.props.editTodo(id, editingValue)
        this.setState({ isEditing: false, editingValue: '' })
    }

    render() {
        const { isEditing, editingValue } = this.state;
        const { id, title } = this.props.todo;
        const { editTodo } = this.props;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type='checkbox' onChange={this.props.markComplete.bind
                        (this, id)} /> {''}
                    {!isEditing ? title : <input value={editingValue} onChange={this.onChangeHandler} />}
                    {isEditing && <button onClick={(e) => this.saveEditHandler(id, editingValue)}>Save Edit</button>}
                    <button style={editStyle} onClick={() => this.isEditingToggler(title)}>Edit</button>
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