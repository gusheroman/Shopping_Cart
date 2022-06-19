import { TextField } from "@material-ui/core";
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
export const NumberInput = () => {
  const classes = useStyles();

  return (
    <TextField
      className={classes.numberInput}
      type="number"
      variant="filled"
      InputProps={{
        inputProps: {
          min: 0,
          style: { textAlign: "center", padding: "16px" },
        },
      }}
    ></TextField>
  );
};
