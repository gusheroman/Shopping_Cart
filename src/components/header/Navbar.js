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
import {
  FilledInput,
  InputAdornment,
  TextField,
  Typography,
} from "@material-ui/core";
const useStyles = makeStyles(() => ({
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
    display:"flex",
    justifyContent:"space-between"
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
  },
  searchBar:{
    height:"60px"
  },
  icon: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  },
  avatar: {
    marginLeft: "20px",
    width: "35px",
    height: "35px",
  },
}));
const Navbar = () => {
  const classes = useStyles();
  const [handleOpenSearch, setHandleOpenSearch] = useState(false);
  const [values, setValues] = useState("");

  const handleChange = (e) => {
    setValues(e.target.value);
  };

  return (
    <div className={classes.root}>
      <Box style={{ display: "flex", alignItems: "center" }}>
        <Box style={{ display: "flex", flexGrow: "1" }}>
          <Link className={classes.row} to={"/"}>
            <Typography variant="h1" className={classes.menuTitle}>
              Book
            </Typography>
          </Link>

          {handleOpenSearch === false ? (
            <>
              <div className={classes.container}>
                <ul className={classes.menuItems}>
                  <Box style={{ display: "flex" }}>
                    {MenuItems.map((val, key) => {
                      return (
                        <li key={key} style={{ paddingLeft: "32px" }}>
                          <Link className={classes.row} to={val.url}>
                            <Typography variant="menuItem">
                              {val.title}
                            </Typography>
                          </Link>
                        </li>
                      );
                    })}
                  </Box>
                </ul>
                <div className={classes.icon}></div>
              </div>
            </>
          ) : (
            <></>
          )}
        </Box>
      </Box>
      {handleOpenSearch === false ? (
        <div className={classes.icon}>
          <SearchIcon
            onClick={() => {
              setHandleOpenSearch(true);
            }}
          />
          <ShoppingCartOutlinedIcon />
          <Avatar className={classes.avatar} alt="John Doe" src={johnAvatar} />
        </div>
      ) : (
        <>
          <FilledInput
          fullWidth
          className={classes.searchBar}
            value={values}
            onChange={handleChange}
            endAdornment={<InputAdornment position="end">Kg</InputAdornment>}
          />
          <div className={classes.icon}>
            <CloseIcon
              onClick={() => {
                setHandleOpenSearch(false);
              }}
            />
            <ShoppingCartOutlinedIcon />
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
