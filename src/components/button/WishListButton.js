import React from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  wishListButton: {
    marginRight: "64px",
    width: "209px",
    height: "50px",
    "&.MuiButton-contained": {
      backgroundColor: "#F2994A",
      color: "white",
      boxShadow: "none",
      borderRadius: "50px",
      fontFamily: "prompt",
      fontSize: "14px",
    },
  },
});

export const WishListButton = () => {
  const classes = useStyles();

  return (
    <Button
      variant="contained"
      color="primary"
      size="large"
      className={classes.wishListButton}
      startIcon={<FavoriteIcon />}
    >
      WishList
    </Button>
  );
};
