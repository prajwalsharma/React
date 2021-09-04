import React from "react";
import Person from "./Person";

const NameList = () => {
  const names = ["Bruce", "Clark", "Diana"];

  return (
    // Render the array using map() method
    <div>
      <Person namesParam={names} />
    </div>
  );
};

export default NameList;
