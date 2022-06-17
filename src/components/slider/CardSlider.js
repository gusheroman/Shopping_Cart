import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  slide: {
    "& .react-multiple-carousel__arrow": {
      borderRadius: "20px",
      background:"#737373"
    },
    "& .react-multiple-carousel__arrow--left": {
      left: "-15px",
    },
    "& .react-multiple-carousel__arrow--right": {
      right: "-15px",
    },
    "& .react-multiple-carousel__arrow::before": {
      fontSize: "15px",
      margin: "0px 12px",
    },
  },
});

const CardSlider = ({ cardSlider }) => {
  const classes = useStyles();
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      <Carousel
        className={classes.slide}
        swipeable={false}
        draggable={false}
        infinite={true}
        showDots={false}
        responsive={responsive}
      >
        {cardSlider}
      </Carousel>
    </div>
  );
};

export default CardSlider;
