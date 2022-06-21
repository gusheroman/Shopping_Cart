import React,{useContext} from "react";
import { CartContext } from "../context/CartContext";
import { makeStyles } from "@material-ui/styles";
import { Box, FormControlLabel, Grid, Typography } from "@material-ui/core";
import credit from "../assests/image/credit.png";
import kerry from "../assests/image/kerry.png";
import MonetizationOnOutlinedIcon from "@material-ui/icons/MonetizationOnOutlined";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Link } from "react-router-dom";
import { CustomButton } from "../components/CustomButton";
import LockIcon from "@material-ui/icons/Lock";
import { TextInput } from "../components/input/TextInput";
import { SelectInput } from "../components/input/SelectInput";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";

const useStyles = makeStyles({
  container: {
    marginTop: "138px",
    paddingBottom: "234px",
    margin: "0px 124px",
  },
  contentContainer: {
    marginTop: "30px",
  },

  totalOrder: {
    background: "#F5F9FF",
    height: "380px",
    width: "366px",
    marginLeft: "64px",
  },
  checkoutContainer: {
    width: "366px",
  },
  totalOrderContainer: {
    padding: "24px",
  },
  card: {
    display: "flex",
    height: "122px",
    alignItems: "center",
  },
  cardContent: {
    marginLeft: "24px",
  },
  radio: {
    "&.MuiRadio-root": {},
    "&.MuiIconButton-label": {
      height: "100px",
    },
  },
});

const CheckOut = () => {
  const classes = useStyles();
  const cart = useContext(CartContext);
  const discountProductsPrice = Object.values(cart.products).reduce(
    (r, { discount }) => r + discount,
    0
  );
  const productsPrice = Object.values(cart.products).reduce(
    (r, { price }) => r + price,
    0
  );
  const allPrice = productsPrice - discountProductsPrice;

  return (
    <div className={classes.container}>
      <Typography variant="h2">ตะกร้าสินค้า</Typography>
      <div className={classes.contentContainer}>
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: "40px",
          }}
        >
          <Box>
            <Typography variant="subtitle2" style={{ fontWeight: 600 }}>
              ที่อยู่ในการจัดส่ง
            </Typography>
            <hr style={{ margin: "16px 0px" }} />
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <Typography variant="body1">ชื่อ</Typography>
                <TextInput />
              </Grid>
              <Grid item xs={4}>
                <Typography variant="body1">นามสกุล</Typography>
                <TextInput />
              </Grid>
              <Grid item xs={8}>
                <Typography variant="body1">ประเทศ</Typography>
                <SelectInput />
              </Grid>
              <Grid item xs={8}>
                <Typography variant="body1">
                  ที่อยู่{" "}
                  <span style={{ color: "red" }}>
                    {"("}บ้านเลขที่ / หมู่บ้าน / หมู่ที่ / ซอย / ถนน{")"}{" "}
                  </span>{" "}
                </Typography>
                <TextInput />
              </Grid>
              <Grid item xs={2} />
              <Grid item xs={4}>
                <Typography variant="body1">แขวง/ตำบล</Typography>
                <TextInput />
              </Grid>
              <Grid item xs={4}>
                <Typography variant="body1">เขต/อำเภอ</Typography>
                <TextInput />
              </Grid>
              <Grid item xs={2} />
              <Grid item xs={4}>
                <Typography>จังหวัด</Typography>
                <TextInput />
              </Grid>
              <Grid item xs={4}>
                <Typography>รหัสไปรษณีย์</Typography>
                <TextInput />
              </Grid>
              <Grid item xs={8}>
                <Typography>
                  เบอร์ติดต่อ {"("}กรุณาระบุหมายเลขโทรศัพท์ เฉพาะตัวเลขเท่านั้น
                  {")"}
                </Typography>
                <TextInput />
              </Grid>
              <Grid item xs={12} style={{ marginTop: "64px" }}>
                <Typography variant="subtitle2" style={{ fontWeight: 600 }}>
                  เลือกขนส่ง
                </Typography>
                <hr />
              </Grid>
              <RadioGroup
                style={{ width: "100%" }}
                defaultValue="freeShipping"
                name="shippingMethod"
              >
                <Grid item xs={12}>
                  <Card className={classes.card}>
                    <CardContent className={classes.cardContent}>
                      <FormControlLabel
                        value="freeShipping"
                        control={<Radio className={classes.radio} />}
                        label={
                          <div style={{ fontSize: "18px", marginLeft: "34px" }}>
                            Free Shipping
                          </div>
                        }
                      />
                    </CardContent>
                  </Card>
                  <Card className={classes.card} style={{ marginTop: "14px" }}>
                    <CardContent className={classes.cardContent}>
                      <FormControlLabel
                        value="kerry"
                        control={<Radio className={classes.radio} />}
                        label={
                          <img
                            src={kerry}
                            alt="credit"
                            style={{
                              height: "32px",
                              width: "100%",
                              marginLeft: "34px",
                            }}
                          ></img>
                        }
                      />
                    </CardContent>
                  </Card>
                </Grid>
              </RadioGroup>
              <Grid item xs={12} style={{ marginTop: "64px" }}>
                <Typography variant="subtitle2" style={{ fontWeight: 600 }}>
                  วิธีชำระเงิน
                </Typography>
                <hr />
              </Grid>

              <RadioGroup
                style={{ width: "100%" }}
                defaultValue="cash"
                name="chekoutMethod"
              >
                <Grid item xs={12}>
                  <Card className={classes.card}>
                    <CardContent className={classes.cardContent}>
                      <FormControlLabel
                        value="cash"
                        control={<Radio className={classes.radio} />}
                        label={
                          <span
                            style={{
                              display: "flex",
                              alignItems: "flex-end",
                              marginLeft: "34px",
                            }}
                          >
                            <MonetizationOnOutlinedIcon
                              style={{ height: "32px", width: "32px" }}
                            />
                            <div
                              style={{ marginLeft: "20px", fontSize: "18px" }}
                            >
                              Crash
                            </div>
                          </span>
                        }
                      />
                    </CardContent>
                  </Card>
                  <Card className={classes.card} style={{ marginTop: "14px" }}>
                    <CardContent className={classes.cardContent}>
                      <FormControlLabel
                        value="debit"
                        control={<Radio className={classes.radio} />}
                        label={
                          <span
                            style={{
                              display: "flex",
                              alignItems: "flex-end",
                              marginLeft: "34px",
                            }}
                          >
                            <img
                              src={credit}
                              alt="credit"
                              style={{ height: "32px", width: "32px" }}
                            ></img>
                            <div
                              style={{ marginLeft: "20px", fontSize: "18px" }}
                            >
                              Credit/Debit
                            </div>
                          </span>
                        }
                      />
                    </CardContent>
                  </Card>
                </Grid>
              </RadioGroup>
            </Grid>
          </Box>
          <Box></Box>
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
                  <Box style={{ flexGrow: 1, marginTop: "24px" }}>
                    <Typography variant="subtitle2">ยอดรวม</Typography>
                  </Box>
                  <Box style={{ marginTop: "24px" }}>
                    <Typography variant="subtitle2">THB{allPrice}</Typography>
                  </Box>
                </Box>
                <Box style={{ display: "flex" }}>
                  <Box style={{ flexGrow: 1, marginTop: "24px" }}>
                    <Typography variant="subtitle2">ค่าส่ง</Typography>
                  </Box>
                  <Box style={{ margin: "24px 0px" }}>
                    <Typography variant="subtitle2">THB1.00</Typography>
                  </Box>
                </Box>
                <hr />
                <Box style={{ display: "flex" }}>
                  <Box style={{ flexGrow: 1, marginTop: "24px" }}>
                    <Typography variant="subtitle2">ยอดสุทธิ</Typography>
                  </Box>
                  <Box>
                    <Typography
                      style={{
                        marginTop: "24px",
                        marginBottom: "24px",
                        fontSize: "18px",
                        fontWeight: 600,
                      }}
                      variant="subtitle2"
                    >
                      THB{allPrice+1}
                    </Typography>
                  </Box>
                </Box>
                <Link style={{ textDecoration: "none" }} to={"/checkOut"}>
                  <CustomButton label="ชำระเงิน" startIcon={<LockIcon />} />
                </Link>
              </div>
            </div>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default CheckOut;
