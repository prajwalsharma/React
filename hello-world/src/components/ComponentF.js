import React, { Component } from "react";
import { UserConsumer } from "./userContext";

export class ComponentF extends Component {
  render() {
    return (
      <UserConsumer>
        {(username) => {
          return <div>Hello {username}</div>;
        }}
      </UserConsumer>
    );
  }
}

export default ComponentF;

// Context API
// Step 1: Create a context
// Step 2: Define Provider & Consumer
// Step 3: Set Provider on the Parent Component
// Step 4: User Consumer in the child Component
