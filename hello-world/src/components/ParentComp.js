import React, { Component } from "react";
import MemoComp from "./MemoComp";
import PureComp from "./PureComp";
import RegComp from "./RegComp";

// Parent component contains 2 child components (Pure & Regular component)
class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Prajwal",
    };
  }

  // This method will execute after every 2s & change the state
  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Prajwal",
      });
    }, 2000);
  }

  render() {
    console.log("Parent Component Rendered");
    return (
      <div>
        Parent Component
        <RegComp name={this.state.name} />
        <PureComp name={this.state.name} />
        <MemoComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp;
