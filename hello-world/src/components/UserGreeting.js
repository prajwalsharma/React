import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    return (
      // Conditional rendering using ternary operator
      <div>
        {this.state.isLoggedIn ? (
          <div>Hello, Prajwal</div>
        ) : (
          <div>Hello, Guest!</div>
        )}

        {this.state.isLoggedIn && <button>Logout</button>}
      </div>
    );
  }
}

export default UserGreeting;
