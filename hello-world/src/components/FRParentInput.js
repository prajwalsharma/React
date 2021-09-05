import React, { Component, createRef } from "react";
import FRInput from "./FRInput";

class FRParentInput extends Component {
  constructor(props) {
    super(props);

    // 1. Create ref in parent component
    this.inputRef = createRef();
  }

  buttonClickHandler = () => {
    this.inputRef.current.focus();
  };

  render() {
    return (
      <div>
        {/** 2. Pass the ref to the functional child component  */}
        <FRInput ref={this.inputRef} />
        <button onClick={this.buttonClickHandler}>Focus Input!</button>
      </div>
    );
  }
}

export default FRParentInput;
