import { TextField } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  input: {
    marginRight: "36px",
    "& .MuiOutlinedInput-root": {
      borderRadius: "50px",
      "&.Mui-focused fieldset": {
        borderColor: "#DFDFDF",
      },
      "&:hover fieldset": {
        borderColor: "#DFDFDF",
      },
    },
  },
});

export const TextInput = ({ select }) => {
  const classes = useStyles();

  return (
    <TextField
      fullWidth
      className={classes.input}
      type="text"
      variant="outlined"
      select={select}
      InputProps={{
        inputProps: {
          style: {
            padding: "16px",
            fontFamily: "prompt",
            fontStyle: "normal",
            fontSize: "13px",
            fontWeight: 400,
            lineHeight: "27px",
            color: "#000000",
          },
        },
      }}
    ></TextField>
  );
};
