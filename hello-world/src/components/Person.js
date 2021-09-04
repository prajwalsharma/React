import React from "react";

const Person = ({ namesParam }) => {
  return (
    // Using index of array as Anti-pattern
    <div>
      {namesParam.map((name, index) => {
        return <p key={index}>{name}</p>;
      })}
    </div>
  );
};

export default Person;
