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
    height:"500px",
  },
});

const CardSlider = ({ cardSlider }) => {
  const classes = useStyles();
  const responsive = {
  
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    
  };

  return (
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
  );
};

export default CardSlider;
