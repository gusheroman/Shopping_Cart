import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  wishListButton: {
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
  addButon: {
    marginRight: "18px",
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
  addToCartButton: {
    width: "100%",
    "&.MuiButton-outlined": {
      color: "#0156FF",
      boxShadow: "none",
      borderRadius: "50px",
      fontFamily: "prompt",
      fontSize: "14px",
      fontWeight: 500,
      borderColor: "#0156FF",
      borderStyle: "solid",
    },
  },
});

export const CustomButton = ({
  variant = "contained",
  startIcon,
  label,
  isWishListButton,
  isAddButton,
  isAddtoCartButton,
  click,
}) => {
  const classes = useStyles();
  return (
    <Button
      onClick={click}
      variant={variant}
      color="primary"
      size="large"
      className={
        isWishListButton
          ? classes.wishListButton
          : isAddButton
          ? classes.addButon
          : isAddtoCartButton
          ? classes.addToCartButton
          : classes.vutton
      }
      startIcon={startIcon}
    >
      {label}
    </Button>
  );
};
