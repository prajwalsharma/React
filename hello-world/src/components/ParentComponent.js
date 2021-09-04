import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentName: "Parent",
    };
  }

  greetParent = (data) => {
    alert(`Hello ${this.state.parentName} from ${data}`);
  };

  render() {
    return (
      <div>
        <ChildComponent onclick={this.greetParent} />
      </div>
    );
  }
}

export default ParentComponent;
