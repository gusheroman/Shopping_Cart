import React from "react";
import { Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";

export const ProductBaner = ({Title1,Title2}) => {
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
      container
    >
      <Typography variant="h2" style={{ fontSize: "22px", fontWeight: 600 }}>
        {Title1}
      </Typography>

      <Link style={{ color: "black" }} to={"/"}>
        <Typography>{Title2}</Typography>
      </Link>
    </Box>
  );
};
