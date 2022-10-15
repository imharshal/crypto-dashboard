import React from "react";
import "./styles.css";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

function LineChart({ chartData, options }) {
  return (
    <div>
      <Line data={chartData} options={options} />
    </div>
  );
}

export default LineChart;
