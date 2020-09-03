import React from 'react';




class TodoItems extends React.Component {
    getStyle = () => {
        return {
            backgroundColor: '#f0f0f0',
            padding: '10px',
            borderBottom: '1px dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'

        }

    }

    //isEditingToggler =(value)=>{
    //  this.setState({isEditing:true, editingValue: value})
    //}

    //onChangeHandler = (e)=>{
    //  this.setState({editingValue: e.target.value})
    //}

    //saveEditHandler = (id,editingValue) =>{
    //this.props.editTodo(id,editingValue)
    //this.setState({isEditing:false,editingValue:''})
    //}

    render() {
        const { title, id } = this.props.todo
        // const { isEditing, editingValue } = this.state;
        //const { editTodo } = this.props;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type='checkbox' onChange={this.props.markComplete.bind(this, id)} />
                    {title}
                    <button style={delstyle} onClick={this.props.delTodo.bind(this, id)}>x</button>
                </p>



            </div>


        )
    }
}



const delstyle = {
    color: 'white',
    backgroundColor: 'red',
    padding: '5px',
    float: 'right',
    borderRadius: '50px',
    cursor: 'pointer'
}


export default TodoItems;