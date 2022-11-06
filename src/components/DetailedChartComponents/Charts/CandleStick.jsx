import React, { useContext } from "react";
import Chart from "react-apexcharts";
import { Box } from "@mui/material";
import { ColorModeContext } from "../../../AppContext";

function CandleStick({ coinName, data }) {
  const { colormode, toggleColorMode } = useContext(ColorModeContext);
  const options = {
    chart: {
      type: "candlestick",
      foreColor: "var(--grey)",
    },
    tooltip: {
      theme: "dark",
    },
    zoom: {
      enabled: true,
    },

    title: {
      text: coinName,
      align: "left",
    },
    xaxis: {
      type: "datetime",
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
    },
    responsive: [
      {
        breakpoint: 500,
        options: {
          chart: {
            height: 750,
          },
        },
      },
      {
        breakpoint: 1000,
        options: {
          chart: {
            height: "300",
          },
        },
      },
    ],
  };

  return (
    <Box id="chart" sx={{ padding: 1 }}>
      <Chart options={options} series={data} type="line" />
    </Box>
  );
}

export default CandleStick;
