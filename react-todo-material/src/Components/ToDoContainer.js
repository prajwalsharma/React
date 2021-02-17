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

class ToDoContainer extends Component {
  render() {
    return (
      <div>
        <Container maxWidth="sm">
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <AppBar
              position="static"
              style={{ padding: "10px", textAlign: "center" }}
            >
              <Typography variant="h6">
                React ToDo App (Material UI) <span>🔥</span>
              </Typography>
            </AppBar>
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
                  <TextField label="Enter task here..." variant="outlined" />
                  <Button
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
            <Card style={{ width: "100%" }}>
              <CardContent>
                <List>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <ImageIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Photos" secondary="Jan 9, 2014" />
                  </ListItem>
                  <Divider variant="middle" />
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <WorkIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Work" secondary="Jan 7, 2014" />
                  </ListItem>
                  <Divider variant="middle" />
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <BeachAccessIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Vacation"
                      secondary="July 20, 2014"
                    />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default ToDoContainer;
