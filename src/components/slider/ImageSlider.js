import React from "react";
import { Slide } from "react-slideshow-image";
import slideImages from "../../data/SlideShowImage";
import "react-slideshow-image/dist/styles.css";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    listStyle: "none",
    padding: 0,
  },

  slide: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
    backgroundPosition: "50% 50%",
    minHeight: "50vh",
  },
});

const Slider = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Slide easing="ease">
        {slideImages.map((slide, index) => (
          <div key={slide}>
            <div
              className={classes.slide}
              style={{ backgroundImage: `url(${slideImages[index]})` }}
            ></div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slider;
