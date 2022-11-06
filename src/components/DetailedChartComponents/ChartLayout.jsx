import React from "react";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import ChartWrapper from "./ChartWrapper";
import CoinList from "./CoinListComponents/CoinList";

export default function ChartLayout() {
  return (
    <Box
      sx={{
        display: "flex",
        // width: "100%",
        height: "100vh",
        color: "text.primary",
      }}
    >
      <ChartWrapper />
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          //   width: "50%",
          width: 400,
          height: "100vh",
          bgcolor: "background.default",
          color: "text.primary",
          border: "1px solid blue",

          p: 3,
        }}
      >
        <CoinList />
      </Box>
    </Box>
  );
}
