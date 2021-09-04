import React, { Component } from "react";

export default class Counter extends Component {
  // Define state in class constructor
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  // 1. Increment count on button click
  // 2. We can pass a callback function as second parameter if
  //    we want to perform some action after updating the state
  incrementCountHandler = () => {
    this.setState(
      // 1.1 Best way to change state
      // 1.2 Use props to change state
      (prevState, props) => ({
        count: prevState.count + parseInt(props.addValue),
      }),
      () => {
        // Perform some action after state is changed
        console.log(this.state.count);
      }
    );
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.incrementCountHandler()}>Increment</button>
      </div>
    );
  }
}
