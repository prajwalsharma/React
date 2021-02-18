import React, { Component } from "react";
import {
  Card,
  CardContent,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  Divider,
  ListItemText,
} from "@material-ui/core";
import ImageIcon from "@material-ui/icons/Image";
import WorkIcon from "@material-ui/icons/Work";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";
import ToDoItem from "./ToDoItem";

export class ToDoList extends Component {
  render() {
    return (
      <Card style={{ width: "100%" }}>
        <CardContent>
          <List>
            {this.props.todos.length > 0 ? (
              this.props.todos.map((todo) => {
                console.log(this.props.todos.length);
                if (this.props.todos.length == 0) {
                  return <p>Hello</p>;
                }

                return (
                  <ToDoItem
                    key={todo.id}
                    id={todo.id}
                    name={todo.name}
                    createdon={todo.createdOn}
                    click={this.props.delete}
                  />
                );
              })
            ) : (
              <p style={{ textAlign: "center" }}>No records found</p>
            )}
          </List>
        </CardContent>
      </Card>
    );
  }
}

export default ToDoList;
