import React, { Fragment } from "react";
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider,
  IconButton,
} from "@material-ui/core";
import ImageIcon from "@material-ui/icons/Image";
import DeleteIcon from "@material-ui/icons/Delete";

function ToDoItem({ id, name, createdon, click }) {
  return (
    <Fragment>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={name} secondary={createdon} />
        <IconButton onClick={(event) => click(event, id)} aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </ListItem>
      <Divider variant="middle" />
    </Fragment>
  );
}

export default ToDoItem;
