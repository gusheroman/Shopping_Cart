import React, { useState } from "react";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import CloseIcon from "@material-ui/icons/Close";
import Avatar from "@material-ui/core/Avatar";
import johnAvatar from "../../assests/image/john.jpg";
import { Typography } from "@material-ui/core";
import { SearchBar } from "../input/SearchBar";
import CartDropDown from "../CartDropDown";
const useStyles = makeStyles({
  root: {
    display: "flex",
    background: "white",
    width: "100vw",
    zIndex: 100,
    height: "82px",
    top: "0",
    position: "fixed",
    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
    paddingLeft: "122px",
    paddingRight: "122px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  menuTitle: {
    cursor: "pointer",
  },
  menuItems: {
    listStyle: "none",
  },
  row: {
    color: "black",
    textDecoration: "none",
    marginRight: "26px",
    fontFamily: "prompt",
    fontStyle: "normal",
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "26px",
    color: "#000000",
  },
  icon: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    marginRight: "20px",
  },
  avatar: {
    marginLeft: "20px",
    width: "36px",
    height: "36px",
  },
});
const Navbar = () => {
  const classes = useStyles();
  const [handleOpenSearch, setHandleOpenSearch] = useState(false);

  return (
    <div className={classes.root}>
      <Box style={{ display: "flex", alignItems: "center" }}>
        <Link className={classes.row} to={"/"}>
          <Typography variant="h1" className={classes.menuTitle}>
            Book
          </Typography>
        </Link>
        {handleOpenSearch === false ? (
          <>
            <ul className={classes.menuItems}>
              <Box style={{ display: "flex" }}>
                {MenuItems.map((val, key) => {
                  return (
                    <li key={key} style={{ paddingLeft: "32px" }}>
                      <Link className={classes.row} to={val.url}>
                        {val.title}
                      </Link>
                    </li>
                  );
                })}
              </Box>
            </ul>
          </>
        ) : (
          <></>
        )}
      </Box>
      {handleOpenSearch === false ? (
        <div className={classes.icon}>
          <SearchIcon
            style={{ marginRight: "32px" }}
            onClick={() => {
              setHandleOpenSearch(true);
            }}
          />
          <div style={{ marginRight: "18px" }}>
            <CartDropDown />
          </div>
          <Avatar className={classes.avatar} alt="John Doe" src={johnAvatar} />
        </div>
      ) : (
        <>
          <SearchBar />
          <div className={classes.icon}>
            <CloseIcon
              style={{ marginRight: "32px" }}
              onClick={() => {
                setHandleOpenSearch(false);
              }}
            />
            <div style={{ marginRight: "18px" }}>
              <CartDropDown />
            </div>
            <Avatar
              className={classes.avatar}
              alt="John Doe"
              src={johnAvatar}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
