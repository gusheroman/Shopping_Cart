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
<<<<<<< HEAD
import { Typography } from "@material-ui/core";
=======
import { Typography, InputAdornment } from "@material-ui/core";
>>>>>>> parent of c76f2db (Update ProductCard(add button))
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
<<<<<<< HEAD
  availableContainer: {},
=======
  availableContainer: {
    padding: "0px 11px",
    color: "#78A962",
    fontSize: "10px",
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    fontFamily: "Prompt",
    marginTop: "8px",
  },
  unAvailableContainer: {
    padding: "0px 11px",
    color: "red",
    fontSize: "10px",
    fontFamily: "Prompt",
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    marginTop: "8px",
  },
  imageContainer: {
    margin: "8px 32px",
  },
  image: {
    maxWidth: "100%",
    maxHeight: "160px",
    height: "160px",
  },
  rating: {
    padding: "4px 10px 10px 0px",

    "&.MuiRating-root": {
      fontSize: "13px",
    },
  },
  reviews: {
    margin: "2px",
    color: "grey",
    fontFamily: "Prompt",
    fontSize: "12px",
  },
  bookName: {
    fontSize: "14px",
    fontFamily: "Prompt",
    fontWeight: 600,
  },
  discountPrice: {
    textDecoration: "line-through",
    color: "grey",
    ontSize: "14px",
    fontFamily: "Prompt",
    fontWeight: 400,
  },
  price:{
    ontSize: "18px",
    fontFamily: "Prompt",
    fontWeight: 600,
  }
>>>>>>> parent of c76f2db (Update ProductCard(add button))
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
<<<<<<< HEAD
=======
            <Box style={{ display: "flex", justifyContent: "flex-start" }}>
              <Rating
                className={classes.rating}
                name="read-only"
                value={rating}
                readOnly
              />
              <span className={classes.reviews}>
                Reviews {"("}
                {rating}
                {")"}
              </span>
            </Box>
            <Typography className={classes.bookName}>{bookName}</Typography>
            <Typography className={classes.discountPrice}>
              THB {price - 100}.00
            </Typography>
            <Typography className={classes.price}>THB {price}.00</Typography>
          </div>
>>>>>>> parent of c76f2db (Update ProductCard(add button))
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
