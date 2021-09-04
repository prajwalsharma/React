import React from "react";

const Hello = ({ name, heroName, type }) => {
  return (
    <p>
      {name} : {heroName} ({type})
    </p>
  );
};

export default Hello;
