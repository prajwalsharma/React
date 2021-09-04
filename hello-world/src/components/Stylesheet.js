import React from "react";
import "./Stylesheet.css";
import styles from "./Stylesheet.module.css";

const Stylesheet = ({ stylename }) => {
  // Inline styling
  const style = {
    color: "teal",
  };

  return (
    <div>
      <p className={stylename}>Stylesheet (CSS)</p>
      <p style={style}>Inline Styles</p>
      <p style={{ color: "grey" }}>Inline Styles</p>
      <p className={styles.success}>CSS Module</p>
    </div>
  );
};

export default Stylesheet;
