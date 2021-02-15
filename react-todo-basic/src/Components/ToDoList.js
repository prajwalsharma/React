import React, { Component } from "react";

class ToDoList extends Component {
  render() {
    const toDoItems = this.props.items;
    return (
      <div>
        {toDoItems.map((todo) => {
          return (
            <div
              style={{
                margin: "10px",
                padding: "10px",
                backgroundColor: "#03a9f48c",
              }}
              key={todo.id}
            >
              <span>{todo.name}</span>
              <button
                onClick={(event) => this.props.click(event, todo.id)}
                style={{ float: "right" }}
              >
                X
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ToDoList;
