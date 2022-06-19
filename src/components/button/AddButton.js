import { Button } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles({
  addButton: {
    marginRight: "64px",
    width: "209px",
    height: "50px",
    "&.MuiButton-contained": {
      backgroundColor: "#0156FF",
      color: "white",
      boxShadow: "none",
      borderRadius: "50px",
      fontFamily: "prompt",
      fontSize: "14px",
    },
  },
});

export const AddButton = () => {
  const classes = useStyles();

  return (
    <Button variant="contained" size="large" className={classes.addButton}>
      Add
    </Button>
  );
};
