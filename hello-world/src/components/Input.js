import React, { Component, createRef } from "react";

class Input extends Component {
  constructor(props) {
    super(props);

    // 1. Create a ref
    this.inputRef = createRef();
  }

  // 3. This method will be called from parent component
  focusInput = () => {
    this.inputRef.current.focus();
  };

  render() {
    return (
      <div>
        {/** 2. Set ref on the element */}
        <input type="text" ref={this.inputRef} />
      </div>
    );
  }
}

export default Input;
