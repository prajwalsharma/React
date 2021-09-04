import React from "react";

const buttonClickHandler = () => {
  alert("Button Clicked!");
};

function FunctionClick() {
  return (
    <div>
      <button onClick={buttonClickHandler}>Function Click!</button>
    </div>
  );
}

export default FunctionClick;
