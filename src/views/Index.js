import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "../components/slider/ImageSlider";
import Product from "../components/ProductCard";
import { Link } from "react-router-dom";
import Book from "../data/Book.json";
import Box from "@material-ui/core/Box";
import CardSlider from "../components/slider/CardSlider";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#F4F4F4",
    minHeight: "100vh",
  },
  container: {
    margin: "0px 220px",
    paddingBottom: "220px",
  },

  link: { color: "black" },
}));

const Index = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Slider />
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          container
        >
          <h2>สินค้าขายดี</h2>
          <Link className={classes.link} to={"/"}>
            ดูสินค้าขายดีทั้งหมด
          </Link>
        </Box>
        <CardSlider
          cardSlider={Book.map((book) => (
            <Product
              bookName={book.bookName}
              rating={book.rating}
              available={book.available}
              price={book.price}
              coverBookImage={book.coverBookImage}
              ID={book.ID}
            />
          ))}
        />
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2>สินค้าแนะนำ</h2>
          <Link className={classes.link} to={"/"}>
            ดูสินค้าขายดีทั้งหมด
          </Link>
        </Box>
        <CardSlider
          cardSlider={Book.map((book) => (
            <Product
              bookName={book.bookName}
              rating={book.rating}
              available={book.available}
              price={book.price}
              coverBookImage={book.coverBookImage}
              ID={book.ID}
            />
          ))}
        />
      </div>
    </div>
  );
};

export default Index;
