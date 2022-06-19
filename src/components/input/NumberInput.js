import { TextField } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles({
    numberInput: {
        marginRight: "64px",
        width: "122px",
        "& .MuiFilledInput-root": {
          borderRadius: "6px",
        },
        "& .MuiFilledInput-underline:before": {
          borderBottom: "none",
        },
        "& .MuiFilledInput-underline:after": {
          borderBottom: "none",
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
