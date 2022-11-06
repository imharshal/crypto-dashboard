import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import ChartOptions from "./ChartOptions";
import CandleStick from "./Charts/CandleStick";
import { getOHLCData } from "../../functions/getOHLCData";
import { useContext } from "react";
import { ChartContext } from "../../AppContext";
function ChartWrapper() {
  const { options, updateOptions } = useContext(ChartContext);
  //   console.log(options);
  return (
    <Box
      sx={{
        //   display: "flex",
        width: "90vw",
        flexGrow: 2,
        height: "100vh",
        bgcolor: "background.default",
        color: "text.primary",
        border: "1px solid red",
      }}
    >
      <ChartOptions />
      <CandleStick data={options.data} coinName="bitcoin" />
    </Box>
  );
}

export default ChartWrapper;
