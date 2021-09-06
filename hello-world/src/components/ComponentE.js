import React, { Component } from "react";
import ComponentF from "./ComponentF";
import UserContext from "./userContext";

class ComponentE extends Component {
  static contextType = UserContext;

  render() {
    return (
      <div>
        Component E context: {this.context}
        <ComponentF />
      </div>
    );
  }
}

export default ComponentE;

// Context API
// Step 1: Create a context
// Step 2: Define Provider & Consumer
// Step 3: Set Provider on the Parent Component
// Step 4: Use Consumer in the child Component
//    OR
// Step 4: User Context in the child Component (Line 6 & 11)
