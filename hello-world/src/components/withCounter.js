import React from "react";
import { Component } from "react";

// Define a HOC - takes 'WrappedComponent' as input & returns 'WithCounter'
// 'incrementNumber' is coming from child components
const withCounter = (WrappedComponent, incrementNumber) => {
  class WithCounter extends Component {
    constructor(props) {
      super(props);

      // Common state used by multiple components using this HOC
      this.state = {
        count: 0,
      };
    }

    // Common method used to change state - used by components using this HOC
    incrementCount = () => {
      this.setState((prevState) => ({
        count: prevState.count + incrementNumber,
      }));
    };

    render() {
      return (
        <WrappedComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
          {...this.props} // Important: Use this to pass props to child components using this HOC
        />
      );
    }
  }
  return WithCounter;
};

export default withCounter;

// This HOC will contain the common logic/code that is used in multiple components
// Both 'ClickCounter' & 'HoverCounter' will use this HOC for reusable logic/code
