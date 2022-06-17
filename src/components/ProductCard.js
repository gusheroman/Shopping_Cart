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
const useStyles = makeStyles({
  root: {
    width: "250px",
    height: "auto",
    backgroundColor: "#F4F4F4",
    cursor: "pointer",
  },
  cardContainer: {
    margin: "4px 10px",
  },
  checkCircle: {
    color: "green",
    marginTop: 10,
    fontSize: 13,
  },
  cancelIcon: {
    color: "red",
    marginTop: 10,
    fontSize: 13,
  },
  imageContainer: {
    margin: "4px 56px",
  },
  image: {
    maxWidth: "100%",
    maxHeight: "160px",
    height: "160px",
  },
  rating: {
    marginTop: "3px",
  },
  paraGraph: {
    marginTop: "4px",
  },
  cartButton: {
    display: "flex",
    justifyContent: "center",
    width: "auto",
    marginBottom: "28px",
  },
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
  const [isHovering, setIsHovering] = useState(false);
  const [boxShadow, setBoxShadow] = useState("none");
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    setIsHovering(true);
    setBoxShadow("rgba(0, 0, 0, 0.24) 0px 3px 8px");
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setBoxShadow("none");
  };
  return (
    <Card
      className={classes.root}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => navigate(`/product-detail/${ID}`)}
      style={{ boxShadow: `${boxShadow}` }}
    >
      <div className={classes.cardContainer}>
        <div style={{ margin: "0px 24px" }}>
          {available === true ? (
            <div>
              <CheckCircleIcon className={classes.checkCircle} />
              <p1 style={{ color: "green", fontSize: 14 }}>มีสินค้า</p1>
            </div>
          ) : (
            <div>
              <CancelIcon className={classes.cancelIcon} />
              <p1 style={{ color: "red", fontSize: 14 }}>ไม่มีสินค้า</p1>
            </div>
          )}
        </div>
        <div className={classes.imageContainer}>
          <Box style={{ display: "flex", justifyContent: "space-between" }}>
            <img className={classes.image} src={coverBookImage} alt="coverBookImage" />
            {isHovering && (
              <Box>
                <EqualizerRoundedIcon style={{ margin: "0px 20px" }} />
                <FavoriteBorderRoundedIcon style={{ margin: "0px 20px" }} />
              </Box>
            )}
          </Box>
        </div>
        {isHovering && (
          <div>
            <div className={classes.cartButton}>
              <Button
                onClick={() => navigate(`/product-detail/${ID}`)}
                variant="outlined"
                color="primary"
                startIcon={<ShoppingCartOutlinedIcon />}
              >
                Add To Cart
              </Button>
            </div>
          </div>
        )}
        <Box style={{ display: "flex", justifyContent: "space-between" }}>
          <Rating
            className={classes.rating}
            name="read-only"
            size="small"
            value={rating}
            readOnly
          />
          <div>
            <p1 style={{ color: "grey", fontSize: 15 }}>
              Reviews {"("}
              {rating}
              {")"}
            </p1>
          </div>
        </Box>
        <div className={classes.paraGraph}>
          <p1 style={{ fontWeight: "bold" }}>{bookName}</p1>
        </div>
        <div
          style={{
            marginTop: "10px",
            textDecoration: "line-through",
            color: "grey",
          }}
        >
          <p1>THB{price - 100}</p1>
        </div>
        <div className={classes.paraGraph}>
          <p1 style={{ fontWeight: "bold", fontSize: "20px" }}>THB{price}</p1>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
