import React, { Component } from "react";

class RefsDemo extends Component {
  constructor(props) {
    super(props);

    // 1. Create a ref (New)
    this.inputRef = React.createRef();

    // 1. Create a ref (Old)
    this.cbRef = null;
    this.setCbRef = (element) => {
      this.cbRef = element;
    };
  }

  // 3. Use the ref at page/component load
  componentDidMount() {
    // New way
    this.inputRef.current.focus();

    // Old way
    if (this.cbRef) {
      this.cbRef.focus();
    }
  }

  // 4. Use the ref to fetch input value
  buttonClickHandler = () => {
    alert(this.inputRef.current.value);
  };

  render() {
    return (
      <div>
        {/* 2. Set ref to the element */}
        <input type="text" ref={this.inputRef} />
        <input type="text" ref={this.setCbRef} />
        <button onClick={this.buttonClickHandler}>Click!</button>
      </div>
    );
  }
}

export default RefsDemo;
