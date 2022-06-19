import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import EqualizerRoundedIcon from "@material-ui/icons/EqualizerRounded";
import FavoriteBorderRoundedIcon from "@material-ui/icons/FavoriteBorderRounded";
import Button from "@material-ui/core/Button";
import RadioButtonUncheckedOutlinedIcon from "@material-ui/icons/RadioButtonUncheckedOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import CancelIcon from "@material-ui/icons/Cancel";
import { Typography } from "@material-ui/core";
const useStyles = makeStyles({
  root: {
    display: "flex",
  },
  parentContainer: {
    position: "relative",
    width: "300px",
    height: "300px",
    padding: 0,
    display: "inline-block",
    color: "black",
    cursor: "pointer",
  },
  childContainer: {
    padding: "24px",
    position: "absolute",
    top: 0,
    left: 0,
    width: "300px",
    height: "300px",
    background: "red",
    "&:hover": {
      height: "350px",
      backgroundColor: "red",
      zIndex: 10,
      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    },
  },
  availableContainer: {},
});

const ProductCard = ({
  bookName,
  rating,
  available,
  price,
  coverBookImage,
  ID,
}) => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <div className={classes.root}>
      <div className={classes.parentContainer}>
        <div className={classes.childContainer}>
        <h4>ลอง hover ดูสิจ้ะ</h4>
            <div>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia
              exercitationem recusandae, saepe nesciunt quaerat molestias dolore
              animi porro accusamus deleniti quae perspiciatis. Sint cum
              perferendis distinctio, magnam aperiam aliquid incidunt.
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
