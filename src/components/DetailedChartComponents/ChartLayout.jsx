import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import CoinList from "./CoinListComponents/CoinList";
import ChartOptions from "./ChartOptions";
import CandleStick from "./Charts/CandleStick";
import { useContext } from "react";
import { ChartContext } from "../../AppContext";
export default function ChartLayout() {
  const { options, updateOptions } = useContext(ChartContext);
  const [open, setOpen] = useState(true);
  const handleListToggle = () => {
    setOpen(!open);
  };
  const handleListClose = () => {
    setOpen(false);
  };
  return (
    <Box
      sx={{
        display: "flex",
        // width: "100%",
        height: "100vh",
        color: "text.primary",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "90vw",
          flexGrow: 2,
          height: "100vh",
          bgcolor: "background.default",
          color: "text.primary",
        }}
      >
        <ChartOptions handleListClose={handleListClose} open={open} />
        <CandleStick
          data={options.data}
          coinName="bitcoin"
          type={options.chartType}
        />
      </Box>
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          //   width: "50%",
          width: 400,
          height: "100vh",
          bgcolor: "background.default",
          color: "text.primary",
          p: 1,
          borderLeft: 2,
        }}
      >
        <CoinList />
      </Box>
    </Box>
  );
}
