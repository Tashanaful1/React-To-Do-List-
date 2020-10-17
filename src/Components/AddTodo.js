import React from "react";

class AddTodo extends React.Component {
  state = {
    title: "",
  };

  onChange = (e) => this.setState({ title: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    this.props.AddTodo(this.state.title);
    this.setState({ title: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
          <input
            type="text"
            name="title"
            placeholder="Add task..."
            style={{ flex: "10", padding: "5px" }}
            value={this.state.title}
            onChange={this.onChange}
          ></input>
          <input
            type="submit"
            value="Submit"
            className="btn"
            style={{ flex: "1" }}
          />
        </form>
      </div>
    );
  }
}

export default AddTodo;
