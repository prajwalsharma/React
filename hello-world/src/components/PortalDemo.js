import React from "react";
import reactDom from "react-dom";
import { createPortal } from "react-dom";

const PortalDemo = () => {
  return createPortal(<h3>Portal</h3>, document.getElementById("portalroot"));
};

export default PortalDemo;
