import React from "react";
import { AppBar, Typography } from "@material-ui/core";

function Header() {
  return (
    <AppBar position="static" style={{ padding: "10px", textAlign: "center" }}>
      <Typography variant="h6">
        React ToDo App (Material UI) <span>🔥</span>
      </Typography>
    </AppBar>
  );
}

export default Header;
