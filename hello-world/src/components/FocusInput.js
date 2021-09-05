import React, { Component, createRef } from "react";
import Input from "./Input";

class FocusInput extends Component {
  constructor(props) {
    super(props);

    this.componentRef = createRef();
  }

  buttonClickHandler = () => {
    this.componentRef.current.focusInput();
  };

  render() {
    return (
      <div>
        <Input ref={this.componentRef} />
        <button onClick={this.buttonClickHandler}>Focus Input!</button>
      </div>
    );
  }
}

export default FocusInput;
