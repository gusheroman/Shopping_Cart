import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "../components/slider/ImageSlider";
import Product from "../components/ProductCard";
import Book from "../data/Book.json";
import CardSlider from "../components/slider/CardSlider";
import { ProductBaner } from "../components/ProductBaner";
const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "white",
    minHeight: "100vh",
  },
  container: {
    padding: "0px 122px",
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
         <div style={{marginTop:"52px"}}>
        <ProductBaner  Title2={"ดูสินค้าขายดีทั้งหมด"} Title1={"สินค้าขายดี"}/>
        </div>
        <div>
          <CardSlider
            key={Index}
            cardSlider={Book.map((book) => (
              <Product book={book}  />
            ))}
          />
          <div style={{marginTop:"40px"}}>
         <ProductBaner Title2={"ดูสินค้าขายดีทั้งหมด"} Title1={"สินค้าแนะนำ"}/>
         </div>
        </div>
        <CardSlider
          key={Index}
          cardSlider={Book.map((book) => (
            <Product book={book} />
          ))}
        />
      </div>
    </div>
  );
};

export default Index;
