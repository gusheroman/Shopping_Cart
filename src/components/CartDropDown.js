import React, { useContext, useState } from "react";
import Menu from "@material-ui/core/Menu";
import ShoppingCartOutlined from "@material-ui/icons/ShoppingCartOutlined";
import { makeStyles } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";
import { CartContext } from "../context/CartContext";
import { Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { CustomButton } from "./CustomButton";
import { Link } from "react-router-dom";
import deleteItem from "../assests/image/close.png";
import modifyItem from "../assests/image/modify.png";
const useStyles = makeStyles({
  container: {
    "& .MuiList-root": {
      width: "320px",
      height: "380px",
    },
  },
  containerNoProduct: {
    "& .MuiList-root": {
      width: "320px",
      height: "100px",
    },
  },
  imageContainer: {
    height: "65px",
    width: "65px",
  },
});
const CartDropDown = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const cart = useContext(CartContext);
  const [allPrice, setAllPrice] = useState([]);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  // cart.products.filter((item) => {
  //   console.log((item.ID).length)
  // });
  // console.log(allPrice);
  return (
    <div>
      <Badge badgeContent={cart.products.length} color="primary">
        <ShoppingCartOutlined onClick={handleClick} />
      </Badge>
      {cart.products.length > 0 ? (
        <>
          <Menu
            className={classes.container}
            anchorEl={anchorEl}
            PaperProps={{
              style: {
                left: "50%",
                transform: "translateX(-38%) translateY(17.3%)",
              },
            }}
            MenuListProps={{}}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "20px 30px",
              }}
            >
              <Typography
                variant="h2"
                style={{ fontSize: "18px", fontWeight: 500 }}
              >
                ตะกร้าของฉัน
              </Typography>
              <Typography
                variant="subtitle2"
                style={{
                  fontSize: "12px",
                  fontWeight: 400,
                  color: "#8C8C8C",
                  marginBottom: "9px",
                }}
              >
                {cart.products.length} สินค้าในตะกร้าตะกร้า
              </Typography>
              <Link style={{ textDecoration: "none" }} to={"/basket"}>
                <CustomButton
                  isModifyBasket={true}
                  variant="outlined"
                  label="ดูหรือแก้ไขตะกร้าของฉัน"
                />
              </Link>
            </Box>
            <hr />

            {cart.products.map((cart) => (
              <>
                {console.log(cart.price)}
                <Box
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <Box
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "12px 30px",
                    }}
                  >
                    <Box>
                      <Typography
                        variant="subtitle2"
                        style={{
                          marginRight: "10px",
                          fontSize: "13px",
                          fontWeight: 500,
                        }}
                      >
                        1x
                      </Typography>
                    </Box>
                    <Box>
                      <img
                        src={cart.coverBookImage}
                        className={classes.imageContainer}
                        alt="CoverImage"
                      ></img>
                    </Box>
                    <Box>
                      <Typography
                        variant="subtitle2"
                        style={{
                          marginLeft: "10px",
                          fontSize: "13px",
                          fontWeight: 500,
                        }}
                      >
                        {cart.bookName}
                      </Typography>
                    </Box>
                    <span>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          cursor: "pointer",
                        }}
                      >
                        <img
                          src={deleteItem}
                          alt="icon"
                          style={{
                            width: "20px",
                            height: "20px",
                            marginBottom: "6px",
                            marginLeft: "20px",
                          }}
                        ></img>
                        <img
                          src={modifyItem}
                          alt="icon"
                          style={{
                            width: "20px",
                            height: "20px",
                            marginLeft: "20px",
                          }}
                        ></img>
                      </div>
                    </span>
                  </Box>
                  <hr style={{ width: "100%" }} />
                </Box>
              </>
            ))}

            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                paddingTop: "20px",
                paddingBottom: "40px",
              }}
            >
              <Typography
                variant="h2"
                style={{ fontSize: "18px", fontWeight: 600 , marginBottom:"12px"}}
              >
                <span
                  style={{ fontSize: "14px", fontWeight: 500, color: "grey" }}
                >
                  ยอดรวม:
                </span>{" "}
                THB499.00
              </Typography>
              <Link style={{ textDecoration: "none" }} to={"/checkout"}>
                <CustomButton isCardButton={true} label="ไปชำระเงิน" />
              </Link>
            </Box>
          </Menu>
        </>
      ) : (
        <Menu
          className={classes.containerNoProduct}
          anchorEl={anchorEl}
          PaperProps={{
            style: {
              left: "50%",
              transform: "translateX(-38%) translateY(60.5%)",
            },
          }}
          MenuListProps={{}}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="subtitle2" style={{}}>
              ไม่มีสินค้ากรุณาเลือกสินค้า
            </Typography>
            <></>
          </Box>
        </Menu>
      )}
    </div>
  );
};

export default CartDropDown;
