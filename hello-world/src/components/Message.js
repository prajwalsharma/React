import React, { Component } from "react";

export default class Message extends Component {
  // Define state in class constructor
  constructor() {
    super();
    this.state = {
      message: "Welcome, Visitor!",
    };
  }

  // Change state on button click
  buttonClickHandler = () => {
    this.setState({
      message: "Welcome, Prajwal!",
    });
  };

  render() {
    // State destructuring
    const { message } = this.state;

    return (
      <div>
        <p>{message}</p>
        <button onClick={() => this.buttonClickHandler()}>Change Text!</button>
      </div>
    );
  }
}
