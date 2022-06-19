import { createTheme } from "@material-ui/core/styles";
import SFThonburiBold from "../assests/font/SFThonburi-Bold.ttf";
import SukhumvitLight from "../assests/font/SukhumvitSet-Light.ttf";
import PoppinsLight from "../assests/font/Poppins-Light.ttf";
export const theme = createTheme({
    palette: {
     common:{
      main:"black"
     }
    },
  typography: {
    h1: {
      fontFamily: SFThonburiBold,
      fontSize: "36px",
      fontWeight: 700,
      lineHeight: "43px",
      color: "#404041",
    },
    h2: {
      fontFamily: "Prompt",
      fontSize: "36px",
      fontWeight: 600,
      lineHeight: 1.5,
      color:"black"
    },
    h3: {
      fontFamily: "prompt",
      fontSize: "20px",
      fontWeight: 500,
      lineHeight: 1.5,
    },
    menuItem: {
      fontFamily: SukhumvitLight,
      fontStyle: "normal",
      fontSize: "16px",
      fontWeight: 500,
      lineHeight: "25px",
      color: "#000000",
    },
    p1: {
      fontFamily: SukhumvitLight,
      fontStyle: "normal",
      fontSize: "13px",
      fontWeight: 600,
      lineHeight: "150%",
      color: "#000000",
    },
    p2: {
      fontFamily: PoppinsLight,
      fontStyle: "normal",
      fontSize: "10px",
      fontWeight: 500,
      color: "#000000",
    },
    subtitle1: {
      fontFamily: "prompt",
      fontStyle: "normal",
      fontSize: "18px",
      fontWeight: 400,
      lineHeight: "27px",
      color: "#000000",
    },
    subtitle2:{
      fontFamily: "prompt",
      fontStyle: "normal",
      fontSize: "16px",
      fontWeight: 500,
      lineHeight: "26px",
      color: "#000000",
    }
  },
});
