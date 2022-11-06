import React, { useState, useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import MyApp from "../components/DetailedChartComponents/ChartLayout";
import { ChartContext, ColorModeContext } from "../AppContext";
import { getOHLCData } from "../functions/getOHLCData";
export default function DetailedChart() {
  const [mode, setMode] = React.useState("light");
  const [options, setOptions] = React.useState({
    coin: "bitcoin",
    duration: 7,
    chartType: "candlestick",
    data: [],
  });
  const updateOptions = ({ coin, duration, chartType }) => {
    setOptions({
      coin,
      duration,
      chartType,
    });
    getOHLCData(coin, duration).then((data) => {
      setOptions((options) => ({ ...options, data }));
    });
    // console.log(options);
  };

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  useEffect(() => {
    console.log(options.coin);
    getOHLCData(options.coin, options.duration).then((data) => {
      setOptions((options) => ({ ...options, data }));
    });
  }, [options.coin, options.chartType, options.duration]);
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ChartContext.Provider value={{ options, updateOptions }}>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <MyApp />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </ChartContext.Provider>
  );
}
