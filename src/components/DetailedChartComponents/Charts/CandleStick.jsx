import React, { useContext } from "react";
import Chart from "react-apexcharts";
import { Box } from "@mui/material";

function CandleStick({ coinName, data, type }) {
  const options = {
    chart: {
      type: type,
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
    stroke: {
      width: 2,
    },
    colors: ["#2E93fA"],
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
        breakpoint: 2000,
        options: {
          chart: {
            height: "650",
          },
        },
      },
    ],
  };

  return (
    <Box id="chart" sx={{ padding: 1 }}>
      <Chart options={options} series={data} type={type} />
    </Box>
  );
}

export default CandleStick;
