import React, { Component } from "react";
import withCounter from "./withCounter";

class ClickCounter extends Component {
  render() {
    // Props de-structuring
    const { name, count, incrementCount } = this.props;

    // UI
    return (
      <div>
        <button onClick={incrementCount}>
          {name} Clicked {count} times
        </button>
      </div>
    );
  }
}

export default withCounter(ClickCounter, 2);

// HOC - It is a pattern where a function takes a component(input) and returns a new component(output)
// const newComponent = HOC(oldComponent);
// const ironMan = withSuit(TonyStark);

// All props are coming from 'withCounter' HOC
