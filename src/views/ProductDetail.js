import { React, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { useParams } from "react-router-dom";
import Book from "../data/Book.json";
import { Typography } from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { ShareIcon } from "../components/ShareIcon";
import { AddButton } from "../components/button/AddButton";
import { WishListButton } from "../components/button/WishListButton";
import { NumberInput } from "../components/input/NumberInput";
const useStyles = makeStyles({
  container: { margin: "0px 122px", padding: "56px 0px 0px 0px " },
  BookPreviewImage: {
    height: "580px",
    width: "394px",
  },
  ProductDetailContainer: {
    paddingLeft: "64px",
  },
  ProductDetailChildContainer: {
    display: "flex",
    marginTop: "20px",
    marginBottom: "50px",
    flexDirection: "column",
  },
  discountPrice: {
    fontSize: "24px",
    textDecoration: "line-through",
    color: "grey",
    paddingLeft: "12px",
  },

  coverBookPreview: {
    width: "127px",
    height: "192px",
    marginRight: "28px",
    cursor: "pointer",
  },
  tabSelect: {
    margin: "74px 0px",
    "& .MuiButtonBase-root": {
      backgroundColor: "white",
    },
    "& .MuiTab-root": {
      textTransform: "none",
      fontFamily: "prompt",
      fontStyle: "normal",
      fontSize: "14px",
      fontWeight: 600,
      lineHeight: "21px",
      color: "#666666",
    },

    "& .Mui-selected": {
      color: "black",
    },
    "& .PrivateTabIndicator-root-31": {
      height: "2px",
      width: "100%",
      backgroundColor: "#0156FF",
    },
  },
});

const ProductDetail = () => {
  const { ID } = useParams();
  const classes = useStyles();
  const [data, setData] = useState({});
  const [value, setValue] = useState(0);
  const [image, setImage] = useState(false);

  useEffect(() => {
    const data = Book.find((data) => String(data.ID) === ID);
    if (data) {
      setData(data);
    }
  }, [ID]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.container}>
      <Box
        style={{
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        {image === false ? (
          <img
            className={classes.BookPreviewImage}
            src={data.coverBookImage}
            alt="coverBookImage"
          />
        ) : (
          <img
            className={classes.BookPreviewImage}
            src={data.backBookImage}
            alt="backBookImage"
          />
        )}
        <div className={classes.ProductDetailContainer}>
          <Typography variant="h2">{data.bookName}</Typography>
          <div className={classes.ProductDetailChildContainer}>
            <Typography variant="subtitle1" gutterBottom>
              ผู้เขียน : {data.author}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              สำนักพิมพ์ : {data.publisher}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              หมวดหมู่ : {data.category}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              ประเภทของสินค้า : {data.ProductType}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              บาร์โค้ด : {data.barCode}
            </Typography>
          </div>
          <Box
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              variant="subtitle1"
              style={{ fontSize: "24px", marginRight: "24px" }}
            >
              ราคา
            </Typography>
            <Typography variant="h2"> THB{data.price}</Typography>
            <Typography variant="h2" className={classes.discountPrice}>
              THB{data.price - 100}
            </Typography>
          </Box>
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "64px",
            }}
          >
            <NumberInput />
            <AddButton />
            <WishListButton />
          </Box>
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "64px",
            }}
          >
            <Typography variant="subtitle1" gutterBottom>
              แชร์ :
            </Typography>
            <ShareIcon />
          </Box>
        </div>
      </Box>
      <Box style={{ marginTop: "20px" }}>
        <img
          onClick={() => {
            setImage(false);
          }}
          className={classes.coverBookPreview}
          src={data.coverBookImage}
          alt="coverBookImage"
        />
        <img
          onClick={() => {
            setImage(true);
          }}
          className={classes.coverBookPreview}
          src={data.backBookImage}
          alt="backBookImage"
        />
      </Box>
      <Tabs
        className={classes.tabSelect}
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
      >
        <Tab label="เกี่ยวกับสินค้า" />
        <Tab label="รายละเอียด" />
      </Tabs>
      {value === 0 ? (
        <>
          <Typography
            variant="subtitle1"
            gutterBottom
            style={{ fontWeight: 700 }}
          >
            รายละเอียด :{" "}
            <span style={{ fontWeight: 400 }}>{data.bookName}</span>
          </Typography>
          <Typography
            variant="subtitle1"
            gutterBottom
            style={{ fontWeight: 200 }}
          >
            {data.bookDetail}
          </Typography>
        </>
      ) : (
        <>
          <Typography
            variant="subtitle1"
            gutterBottom
            style={{ fontWeight: 700 }}
          >
            รายละเอียด :{" "}
            <span style={{ fontWeight: 400 }}>{data.bookName}</span>
          </Typography>
          <Typography
            variant="subtitle1"
            gutterBottom
            style={{ fontWeight: 200 }}
          >
            {data.bookDetail}
          </Typography>
        </>
      )}
    </div>
  );
};

export default ProductDetail;
