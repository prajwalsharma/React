import React, { Component } from "react";

export class ClassClick extends Component {
  buttonClickHandler = () => {
    alert("Button Clicked!");
  };

  render() {
    return (
      <div>
        <button onClick={this.buttonClickHandler}>Class Click!</button>
      </div>
    );
  }
}

export default ClassClick;
