import React, { useContext } from "react";
import { makeStyles } from "@material-ui/styles";
import { Box, Typography } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { NumberInput } from "../components/input/NumberInput";
import { CustomButton } from "../components/CustomButton";
import { CartContext } from "../context/CartContext";

const useStyles = makeStyles({
  container: {
    marginTop: "138px",
    margin: "0px 124px",
  },
  contentContainer: {
    marginTop: "30px",
  },

  totalOrder: {
    background: "#F5F9FF",
    height: "380px",
    width: "366px",
  },
  totalOrderContainer: {
    padding: "24px",
  },

  table: {
    width: "95%",
  },
  tableCell: {
    fontFamily: "prompt",
    fontStyle: "normal",
    fontSize: "14px",
    fontWeight: 500,
    lineHeight: "26px",
    color: "#000000",
  },
  image: {
    height: "150px",
    width: "100px",
    marginLeft: "24px",
  },
  imageContainer: {
    display: "flex",
    alignItems: "flex-start",
    flexWrap: "wrap",
    margin: "24px 0px",
  },
  bookName: {
    fontFamily: "prompt",
    fontStyle: "normal",
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "26px",
    color: "#000000",
    marginLeft: "24px",
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [createData("Frozen yoghurt", 159, 6.0, 24, 4.0)];

const Basket = () => {
  const classes = useStyles();
  const cart = useContext(CartContext);
  console.log(cart.products);
  return (
    <div className={classes.container}>
      <Typography variant="h2">ตะกร้าสินค้า</Typography>
      <div className={classes.contentContainer}>
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div className={classes.table}>
            <TableContainer>
              <Table className={classes.table} aria-label="order table">
                <TableHead>
                  <TableRow>
                    <TableCell
                      className={classes.tableCell}
                      style={{ paddingLeft: "0px" }}
                    >
                      สินค้า
                    </TableCell>
                    <TableCell className={classes.tableCell}>ราคา</TableCell>
                    <TableCell className={classes.tableCell}>จำนวน</TableCell>
                    <TableCell className={classes.tableCell}>ยอดรวม</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell style={{ paddingLeft: "0px" }} scope="row">
                        <div className={classes.imageContainer}>
                          <img
                            className={classes.image}
                            src={"https://ff.lnwfile.com/bf6au9.jpg"}
                            alt="coverBookImage"
                          />
                          <span className={classes.bookName}>bookName</span>
                        </div>
                      </TableCell>
                      <TableCell
                        style={{ verticalAlign: "top", paddingTop: "16px" }}
                      >
                        <Typography
                          variant="h2"
                          style={{
                            fontSize: "16px",
                            fontWeight: 600,
                            margin: "24px 0px",
                          }}
                        >
                          THB400
                        </Typography>
                      </TableCell>
                      <TableCell style={{ verticalAlign: "top" }}>
                        <div style={{ margin: "24px 0px" }}>
                          <NumberInput />
                        </div>
                      </TableCell>
                      <TableCell style={{ verticalAlign: "top" }}>
                        <Typography
                          variant="h2"
                          style={{
                            fontSize: "16px",
                            fontWeight: 600,
                            margin: "24px 0px",
                          }}
                        >
                          THB400
                        </Typography>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <CustomButton /> <CustomButton />
          </div>
          <Box>
            <div className={classes.totalOrder}>
              <div className={classes.totalOrderContainer}>
                <Typography
                  variant="h2"
                  style={{ fontSize: "24px", fontWeight: 600 }}
                >
                  สรุปคำสั่งซื้อ
                </Typography>
                <Box style={{ display: "flex" }}>
                  <Box
                    style={{ flexGrow: 1, marginTop: "24px" }}
                    bgcolor="grey.300"
                  >
                    <Typography variant="subtitle2">ยอดรวม</Typography>
                  </Box>
                  <Box style={{ marginTop: "24px" }} bgcolor="grey.300">
                    <Typography variant="subtitle2">THB499</Typography>
                  </Box>
                </Box>
                <Box style={{ display: "flex" }}>
                  <Box
                    style={{ flexGrow: 1, marginTop: "24px" }}
                    bgcolor="grey.300"
                  >
                    <Typography variant="subtitle2">ค่าส่ง</Typography>
                  </Box>
                  <Box style={{ margin: "24px 0px" }} bgcolor="grey.300">
                    <Typography variant="subtitle2">THB499</Typography>
                  </Box>
                </Box>
                <hr />
              </div>
            </div>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default Basket;
