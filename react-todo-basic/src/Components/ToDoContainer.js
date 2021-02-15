import React, { Component, Fragment } from "react";
import Header from "./Header";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";

export class ToDoContainer extends Component {
  // Maintain state
  state = {
    currentToDo: "",
    toDoItems: [],
  };

  // Save current ToDo on input change
  toDoInputChangeHandler = (event) => {
    this.setState(
      {
        currentToDo: event.target.value,
      },
      () => {
        console.log(event.target.value);
      }
    );
  };

  // Add ToDo in the list
  addToDoClickHandler = () => {
    // Check if input is empty
    if (this.state.currentToDo === "") {
      return;
    }

    // This is used as key in list
    const timeStamp = new Date();

    // Create new object to insert in the toDoItems array
    const newToDo = {
      id: timeStamp.getTime(),
      name: this.state.currentToDo,
      createdOn: timeStamp.toLocaleString("en-IN"),
    };

    // Copy the previous toDoItems array
    const newToDoItems = [...this.state.toDoItems];

    // Push the newly created object into newToDoItems
    newToDoItems.push(newToDo);

    // Set newly created array in state
    this.setState({
      currentToDo: "",
      toDoItems: newToDoItems,
    });
  };

  // Delete a ToDo on button click
  deleteToDoClickHandler = (event, id) => {
    let currentToDoItems = [...this.state.toDoItems];
    let newToDoItems = currentToDoItems.filter((todo) => todo.id !== id);

    this.setState({
      toDoItems: newToDoItems,
    });
  };

  render() {
    return (
      <Fragment>
        <Header />
        <ToDoForm
          todoitem={this.state.currentToDo}
          change={this.toDoInputChangeHandler}
          click={this.addToDoClickHandler}
        />
        <ToDoList
          items={this.state.toDoItems}
          click={this.deleteToDoClickHandler}
        />
      </Fragment>
    );
  }
}

export default ToDoContainer;
