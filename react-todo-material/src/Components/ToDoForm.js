import React, { Component } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  TextField,
  Button,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

export class ToDoForm extends Component {
  render() {
    return (
      <Card style={{ margin: "20px 0 20px 0" }}>
        <CardMedia
          component="img"
          height="140"
          image="https://images.unsplash.com/photo-1512314889357-e157c22f938d"
        ></CardMedia>
        <CardContent>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <TextField
              onChange={(event) => this.props.change(event)}
              label="Enter task here..."
              variant="outlined"
              value={this.props.name}
            />
            <Button
              onClick={this.props.click}
              variant="contained"
              color="primary"
              size="large"
              startIcon={<AddIcon />}
            >
              Add
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }
}

export default ToDoForm;
