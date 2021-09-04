import React from "react";

const ChildComponent = ({ onclick }) => {
  return (
    <div>
      <button onClick={() => onclick("Child")}>Greet Parent!</button>
    </div>
  );
};

export default ChildComponent;
