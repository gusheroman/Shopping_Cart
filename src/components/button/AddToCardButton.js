import { Button } from "@material-ui/core";
import React from "react";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { makeStyles } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";
const useStyles = makeStyles({
  customButton: {
    width:"100%",
    "&.MuiButton-outlined": {
      color: "#0156FF",
      boxShadow: "none",
      borderRadius: "50px",
      fontFamily: "prompt",
      fontSize: "14px",
      fontWeight:500,
      borderColor:"#0156FF",
      borderStyle: "solid"

    },
  },
});

export const AddToCardButton = ({ ID }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => navigate(`/product-detail/${ID}`)}
      variant="outlined"
      className={classes.customButton}
      startIcon={<ShoppingCartOutlinedIcon />}
    >
      Add To Cart
    </Button>
  );
};
