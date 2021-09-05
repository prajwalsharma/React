import React, { memo } from "react";

const MemoComp = (props) => {
  console.log("Memo Component Rendered");
  return <div>Memo Component - {props.name}</div>;
};

// Using React.memo() in functional component (Pure Component alternative for functional components)
// It is a HOC (Higher Order Component)
export default memo(MemoComp);
