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
  buymoreProductButton: {
    marginRight: "10px",
    "&.MuiButton-outlined": {
      width: "300px",
      color: "#666666",
      boxShadow: "none",
      borderRadius: "50px",
      borderColor: "#666666",
      fontFamily: "prompt",
      fontSize: "14px",
      fontWeight: 500,
      borderStyle: "solid",
    },
  },
  clearBasketButton: {
    width: "300px",
    "&.MuiButton-contained": {
      backgroundColor: "black",
      color: "white",
      boxShadow: "none",
      borderRadius: "50px",
      fontFamily: "prompt",
      fontSize: "14px",
    },
  },
  button: {
    width: "100%",
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

export const CustomButton = ({
  variant = "contained",
  startIcon,
  label,
  isWishListButton,
  isAddButton,
  isAddtoCartButton,
  isBuymoreProduct,
  isClearBasketButton,
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
          : isBuymoreProduct
          ? classes.buymoreProductButton
          : isClearBasketButton
          ? classes.clearBasketButton
          : classes.button
      }
      startIcon={startIcon}
    >
      {label}
    </Button>
  );
};
