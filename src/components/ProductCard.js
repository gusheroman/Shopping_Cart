import React from "react";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import CancelIcon from "@material-ui/icons/Cancel";
import { Typography } from "@material-ui/core";
import { CustomButton } from "./CustomButton";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import favouriteIcon from "../assests/image/favourite.png";
import ratingIcon from "../assests/image/rating.png";
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
      height: "420px",
      backgroundColor: "white",
      zIndex: 10,
      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      "& $unHiddenOnHover": {
        display: "flex",
      },
      "& $unHiddenIconOnHover": {
        display: "flex",
        flexDirection:"column"
      },
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
    padding: "2px 10px 2px 0px",

    "&.MuiRating-root": {
      fontSize: "13px",
    },
  },
  reviews: {
    color: "grey",
    fontFamily: "Prompt",
    fontSize: "12px",
  },

  price: {
    fontSize: "18px",
    fontFamily: "Prompt",
    fontWeight: 600,
  },
  unHiddenOnHover: {
    display: "none",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    marginBottom: "24px",
    cursor: "pointer",
  },
  unHiddenIconOnHover: {
    display: "none",
  },
});

const ProductCard = ({ book }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <div className={classes.root}>
      <div
        className={classes.parentContainer}
        onClick={() => navigate(`/product-detail/${book.ID}`)}
      >
        <div className={classes.childContainer}>
          <div class={classes.content}>
            {book.available === true ? (
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
                  src={book.coverBookImage}
                  alt="coverBookImage"
                />
                <Box className={classes.unHiddenIconOnHover}>
                  <img
                    style={{
                      margin: "0px 20px",
                      marginBottom:"6px",
                      width: "30px",
                      height: "30px",
                    }}
                    src={favouriteIcon}
                    alt="favIcon"
                  />
                  <img
                    style={{
                      margin: "0px 20px",
                      width: "30px",
                      height: "30px",
                    }}
                    src={ratingIcon}
                    alt="ratingIcon"
                  />
                </Box>
              </Box>
            </div>
            <div className={classes.unHiddenOnHover}>
              <CustomButton
                variant="outlined"
                isAddtoCartButton={true}
                label="Add To Cart"
                startIcon={<ShoppingCartOutlinedIcon />}
              />
            </div>
            <Box style={{ display: "flex", justifyContent: "flex-start" }}>
              <Rating
                className={classes.rating}
                name="read-only"
                value={book.rating}
                readOnly
              />
              <span className={classes.reviews}>
                Reviews {"("}
                {book.rating}
                {")"}
              </span>
            </Box>
            <Typography
              variant="h4"
              className={classes.bookName}
              style={{ marginBottom: "12px" }}
            >
              {book.bookName}
            </Typography>
            <Typography
              variant="subtitle1"
              style={{
                textDecoration: "line-through",
                color: "grey",
                fontSize: "14px",

                fontWeight: 400,
              }}
            >
              THB {book.price}.00
            </Typography>
            <Typography variant="subtitle1" style={{ fontWeight: 600 }}>
              THB {book.price-100}.00
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
