import { Grid } from "@material-ui/core";
import React from "react";

function Layout(props) {
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      {props.children}
    </Grid>
  );
}

export default Layout;
