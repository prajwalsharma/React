import React, { Component } from "react";
import {
  AppBar,
  Container,
  Grid,
  Typography,
  Toolbar,
  Paper,
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Divider,
} from "@material-ui/core";

import AddIcon from "@material-ui/icons/Add";
import ImageIcon from "@material-ui/icons/Image";
import WorkIcon from "@material-ui/icons/Work";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";
import Header from "./Header";
import Layout from "./Layout";

class ToDoContainer extends Component {
  // Declare and initialize state
  state = {
    todo: "",
    todos: [],
  };

  // Save value in input field on change event
  toDoInputChangeHandler = (event) => {
    this.setState({
      todo: event.target.value,
    });
  };

  // Add new todo in the todos on button click
  addToDoHandler = () => {
    let todo = this.state.todo;
    let timeStamp = new Date();

    // If input is blank
    if (todo === "") {
      return;
    }

    let newToDo = {
      id: timeStamp.getTime(),
      name: todo,
      createdOn: timeStamp.toLocaleString("en-IN"),
    };

    let newToDos = [...this.state.todos];
    newToDos.push(newToDo);
    this.setState({
      todo: "",
      todos: newToDos,
    });
  };

  // Delete an existing todo
  deleteToDoHandler = (event, id) => {
    let toDos = [...this.state.todos];
    let newToDos = toDos.filter((todo) => todo.id !== id);
    this.setState({
      todos: newToDos,
    });
  };

  render() {
    return (
      <div>
        <Container maxWidth="sm">
          <Layout>
            <Header />
            <ToDoForm
              change={this.toDoInputChangeHandler}
              click={this.addToDoHandler}
              name={this.state.todo}
            />
            <ToDoList
              todos={this.state.todos}
              delete={this.deleteToDoHandler}
            />
          </Layout>
        </Container>
      </div>
    );
  }
}

export default ToDoContainer;
