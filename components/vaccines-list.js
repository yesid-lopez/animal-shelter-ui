import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export const VaccineList = ({ vaccines }) => {
  const classes = useStyles();

  return (<List className={classes.root} name="vaccines-list-cat">

    {vaccines.map(vaccine =>
      <ListItem key={vaccine}>
        <ListItemAvatar>
          <Avatar>
            <FontAwesomeIcon icon={faCheckCircle} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={vaccine} />
      </ListItem>
    )}
  </List>)
}
