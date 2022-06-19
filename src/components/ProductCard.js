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
import { Typography, InputAdornment } from "@material-ui/core";
const useStyles = makeStyles({
  root: {
    display: "flex",
  },
  parentContainer: {
    position: "relative",
    width: "234px",
    height: "300px",
    padding: 0,
    display: "inline-block",
    color: "black",
    cursor: "pointer",
  },
  childContainer: {
    padding: "0px 25px",
    position: "absolute",
    top: 0,
    left: 0,
    width: "234px",
    height: "300px",
    background: "white",
    "&:hover": {
      height: "350px",
      backgroundColor: "white",
      zIndex: 10,
      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    },
  },
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
      <div
        className={classes.parentContainer}
        onClick={() => navigate(`/product-detail/${ID}`)}
      >
        <div className={classes.childContainer}>
          <div class={classes.content}>
            {available === true ? (
              <div className={classes.availableContainer}>
                <CheckCircleIcon style={{ fontSize: "10px" }} />
                <span>มีสินค้า</span>
              </div>
            ) : (
              <div className={classes.unAvailableContainer}>
                <CancelIcon style={{ fontSize: "10px" }} />
                <span>ไม่มีสินค้า</span>
              </div>
            )}
            <div className={classes.imageContainer}>
              <Box style={{ display: "flex", justifyContent: "space-between" }}>
                <img
                  className={classes.image}
                  src={coverBookImage}
                  alt="coverBookImage"
                />
              </Box>
            </div>
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
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
