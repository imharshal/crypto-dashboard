import React, { useState, useEffect, useContext } from "react";
import { Box, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Brightness4, Brightness7 } from "@mui/icons-material";
// import Brightness7Icon from "@mui/icons-material/Brightness7";
import { InputLabel, MenuItem, FormControl, Select } from "@mui/material";
import { ChartContext } from "../../AppContext";
import { ColorModeContext } from "../../AppContext";
import CandleStick from "./Charts/CandleStick";
function ChartOptions() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  const [duration, setDuration] = useState(30);
  const [chartType, setChartType] = useState("candlestick");
  const { options, updateOptions } = useContext(ChartContext);

  const updateDuration = (d) => {
    setDuration(d);
    updateOptions({ ...options, duration: d });
    console.log(d);
  };
  const updateChartType = (ct) => {
    setChartType(ct);
    updateOptions({ ...options, chartType: ct });
    console.log(ct);
  };
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "start",
        bgcolor: "background.default",
        color: "text.primary",
        border: "1px solid black",

        p: 1,
      }}
    >
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="duration-select-small">Duration</InputLabel>
        <Select
          labelId="duration-select-small"
          id="duration-select-small"
          value={duration}
          label="Duration"
          onChange={(e) => updateDuration(e.target.value)}
        >
          <MenuItem value={1}>1 Days</MenuItem>
          <MenuItem value={7}>1 Week</MenuItem>
          <MenuItem value={14}>2 Weeks</MenuItem>
          <MenuItem value={30}>1 Month</MenuItem>
          <MenuItem value={90}>3 Months</MenuItem>
          <MenuItem value={180}>6 Months</MenuItem>
          <MenuItem value={365}>1 year</MenuItem>
          <MenuItem value="max">All times</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="charttype-select-small">Chart Type</InputLabel>
        <Select
          labelId="charttype-select-small"
          id="charttype-select-small"
          value={chartType}
          label="Chart type"
          onChange={(e) => updateChartType(e.target.value)}
        >
          <MenuItem value="candlestick">Candlestick</MenuItem>
          <MenuItem value="line">Line</MenuItem>
        </Select>
      </FormControl>
      <IconButton
        sx={{ ml: 1 }}
        onClick={colorMode.toggleColorMode}
        color="inherit"
      >
        {theme.palette.mode === "dark" ? <Brightness7 /> : <Brightness4 />}
      </IconButton>
    </Box>
  );
}

export default ChartOptions;
