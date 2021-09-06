import React, { Component } from "react";
import ComponentE from "./ComponentE";

class ComponentC extends Component {
  render() {
    return (
      <div>
        <ComponentE />
      </div>
    );
  }
}

export default ComponentC;

// Context API
// Step 1: Create a context
// Step 2: Define Provider & Consumer
// Step 3: Set Provider on the Parent Component
// Step 4: User Consumer in the child Component
