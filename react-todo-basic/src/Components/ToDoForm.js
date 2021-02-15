import React, { Component } from "react";

class ToDoForm extends Component {
  render() {
    return (
      <div style={{ margin: "20px" }}>
        <input
          type="text"
          onChange={this.props.change}
          value={this.props.todoitem}
          placeholder="New task here..."
        />
        <button onClick={this.props.click}>Add</button>
      </div>
    );
  }
}

export default ToDoForm;
