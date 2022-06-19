import { FilledInput, InputAdornment } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
const useStyles = makeStyles({
  searchBar: {
    alignItems: "center",
    marginRight: "26px",
    height: "60px",
    "&.MuiFilledInput-root": {
      borderRadius: "32px",
      textAlign: "center",
      padding: "32px",
      fontFamily: "prompt",
      fontStyle: "normal",
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "27px",
      color: "#000000",
      "& input": {
      padding:0
      }
    },
  },
});
export const SearchBar = () => {
  const classes = useStyles();
  return (
    <FilledInput
      placeholder="ค้นหาสินค้า"
      disableUnderline
      fullWidth
      label="Standard"
      className={classes.searchBar}
      endAdornment={
        <InputAdornment position="end">
          <SearchIcon style={{ color: "#0156FF", cursor:"pointer" }} />
        </InputAdornment>
      }
    />
  );
};
