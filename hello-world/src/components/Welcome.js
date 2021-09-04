import { React, Component } from "react";

class Welcome extends Component {
  render() {
    // props destructuring
    const { name, heroName, type } = this.props;

    return (
      <p>
        {name} : {heroName} ({type})
      </p>
    );
  }
}

export default Welcome;
