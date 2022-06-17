import { React, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { useParams } from "react-router-dom";
import Book from "../data/Book.json";

const useStyles = makeStyles({
  container: { margin: "0px 220px", padding: "68px 0px 0px 0px " },
  BookPreviewImage: {
    height: "550px",
    width: "390px",
  },
  ProductDetailContainer: {
    paddingLeft: "80px",
  },
});

const ProductDetail = () => {
  const { ID } = useParams();
  const classes = useStyles();
  const [data, setData] = useState({});
  console.log("check", data);

  useEffect(() => {
    const data = Book.find((data) => String(data.ID) === ID);
    if (data) {
      setData(data);
    }
  }, [ID]);
  return (
    <div className={classes.container}>
      <Box
        style={{
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <img
          className={classes.BookPreviewImage}
          src={data.coverBookImage}
          alt="coverBookImage"
        />
        <div className={classes.ProductDetailContainer}>
          <h1>{data.bookName}</h1>
          <p1>ผู้เขียน : {data.author}</p1> <br />
          <p1>สำนักพิมพ์ : {data.publisher}</p1> <br />
          <p1>หมวดหมู่ : {data.category}</p1> <br />
          <p1>ประเภทของสินค้า : {data.ProductType}</p1> <br />
          <p1>บาร์โค้ด : {data.barCode}</p1>
          <Box
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              marginTop: "50px",
            }}
          >
            <h1>ราคา : THB{data.price}</h1>
            <h2
              style={{
                textDecoration: "line-through",
                color: "grey",
                paddingLeft: "15px",
              }}
            >
              THB{data.price - 100}
            </h2>
          </Box>
        </div>
      </Box>
    </div>
  );
};

export default ProductDetail;
