import React from "react";


class TodoItem extends React.Component {
  //state ={
  //isEditing:false,
  //editingValue:''
  //}

  getStyle = () => {
    return {
      textDecoration: this.props.todo.completed ? "line-through" : "none",
      borderBottom: "1px #ccc dotted",
      background: "#f4f4f4",
      padding: "10px",
    };
  };
//user clicks the edit button 
  //isEditingToggler= (value)=> {
    //this.setState({
      //isEditing:true,
      //editingValue: value
    //})

  //}


  //onChangeHandle = (e)=> {
    //this.setState({editingValue: e.target.value})

  //};

  render() {
    const {isEditing, editingValue} = this.state;
    return (
      <div style={this.getStyle()}>
        <p><input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, this.props.todo.id)}
          />
          {this.props.todo.title}

         {!isEditing ? title: <input value={editingValue} onChange={this.onChangeHandle}/>
          

          <button
            onClick={this.props.delTodo.bind(this, this.props.todo.id)}
            style={btnStyle}
          >
            X
          </button>
          <button onClick={this.eventHandler} style={editStyle}>Edit</button> </p>
          
      </div>
    );
  }
}

const editStyle = {
  backgroundColor: "yellow",
  float: "right",
  borderRadius: "3px",
  border: "1px solid ",
  padding: "10px",
};

const btnStyle = {
  color: "white",
  border: "none",
  padding: "5px 10px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right",
  background: "#ff0000",
};

export default TodoItem;
