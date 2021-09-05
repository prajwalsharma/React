import React, { PureComponent } from "react";

// Pure component will only re-render if props are changing
class PureComp extends PureComponent {
  render() {
    console.log("Pure Component Rendered");
    return <div>Pure Component - {this.props.name}</div>;
  }
}

export default PureComp;
