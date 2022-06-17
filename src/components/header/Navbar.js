import React from "react";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import Avatar from "@material-ui/core/Avatar";
import johnAvatar from "../../assests/image/john.jpg";
const useStyles = makeStyles(() => ({
  root: {
    background: "white",
    width: "100%",
    zIndex:100,
    height:"86px",
    top:"0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position:"fixed",
    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
  },
  menuTitle: {
    alignItems:"center",
    color: "black",
    cursor: "pointer",
    marginLeft: "220px",
    marginBottom:"28px",
    marginRight: "20px",
  },
  menuItems: {
    display: "grid",
    gridTemplateColumns: "repeat(5, auto)",
    gridGap: "30px",
    listStyle: "none",
    textAlign: "center",
    justifyContent: "end",
  },
  row: {
    color: "black",
    textDecoration: "none",
  },
  gridContainer: {
    direction: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  icon: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginRight: "220px",
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
  return (
    <div className={classes.root}>
        <h1 className={classes.menuTitle}>Book</h1>
        <Grid container className={classes.gridContainer}>
          <ul className={classes.menuItems}>
            {MenuItems.map((val, key) => {
              return (
                <li key={key}>
                  <Link className={classes.row} to={val.url}>
                    {val.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </Grid>

        <div className={classes.icon}>
          <SearchIcon style={{ marginRight: 15 }} />
          <ShoppingCartOutlinedIcon />
          <Avatar className={classes.avatar} alt="John Doe" src={johnAvatar} />
        </div>
    </div>
  );
};

export default Navbar;
