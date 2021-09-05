import React, { Component } from "react";
import withCounter from "./withCounter";

class HoverCounter extends Component {
  render() {
    // Props de-structuring
    const { name, count, incrementCount } = this.props;

    // UI
    return (
      <div>
        <h1 onMouseOver={incrementCount}>
          {name} Hover {count} times
        </h1>
      </div>
    );
  }
}

export default withCounter(HoverCounter, 5);

// HOC - It is a pattern where a function takes a component(input) and returns a new component(output)
// const newComponent = HOC(oldComponent);
// const ironMan = withSuit(TonyStark);

// All props are coming from 'withCounter' HOC
