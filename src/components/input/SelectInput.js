import { TextField } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/styles";
import MenuItem from "@material-ui/core/MenuItem";

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
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
      padding: "16px",
      fontFamily: "prompt",
      fontStyle: "normal",
      fontSize: "13px",
      fontWeight: 400,
      lineHeight: "27px",
      color: "#000000",
    },
  },
});

const country = [
  {
    value: "Thailand",
    label: "Thailand",
  },
 
];

export const SelectInput = () => {
  const classes = useStyles();

  return (
    <TextField
      fullWidth
      className={classes.input}
      variant="outlined"
      select={true}
    >
      {country.map((option) => (
        <MenuItem
          key={option.value}
          value={option.value}
          style={{
            fontFamily: "prompt",
            fontStyle: "normal",
            fontSize: "13px",
            fontWeight: 400,
            color: "#000000",
          }}
        >
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};
