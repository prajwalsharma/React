import React, { Component } from "react";

// Pure component will always re-render no matter if props are changing or not
class RegComp extends Component {
  render() {
    console.log("Regular Component Rendered");
    return <div>Regular Component - {this.props.name}</div>;
  }
}

export default RegComp;
