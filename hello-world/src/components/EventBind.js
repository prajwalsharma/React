import React, { Component } from "react";

export class EventBind extends Component {
  constructor() {
    super();
    this.state = {
      message: "Hello",
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler = () => {
    this.setState((prevState) => ({
      message: "Goodbye",
    }));
  };

  render() {
    const { message } = this.state;

    return (
      <div>
        <p>{message}</p>
        <button onClick={this.clickHandler}>Click 1!</button>
        <button onClick={() => this.clickHandler()}>Click 2!</button>
        <button onClick={this.clickHandler.bind(this)}>Click 3!</button>
        <button onClick={this.clickHandler}>Click 4!</button>
      </div>
    );
  }
}

export default EventBind;
