import * as React from "react";
import "./styles.css";
import Tab from "@mui/material/Tab";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import Grid from "../Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import List from "../List";
import { motion } from "framer-motion";

function DashboardWrapper({ data }) {
  const [value, setValue] = React.useState(0);

  const style = {
    // color: "white",
    color: "var(--white)",
    width: "50vw",
    fontSize: "1.2rem",
    fontWeight: 600,
    fontFamily: "Inter",
    textTransform: "capitalize",
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const theme = createTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: "#3a80e9",
      },
    },
  });

  return (
    <div className="tabs-wrapper">
      <ThemeProvider theme={theme}>
        <TabContext value={value}>
          <TabList
            variant="fullWidth"
            value={value}
            onChange={handleChange}
            textColor="primary"
          >
            <Tab label="Grid" sx={style} />
            <Tab label="List" sx={style} />
          </TabList>
          <TabPanel value={0}>
            <div className="grid-flex">
              {data.length === 0 ? (
                <p>No Crypto Currencies Found</p>
              ) : (
                data.map((coin, i) => <Grid coin={coin} key={i} delay={i} />)
              )}
            </div>
          </TabPanel>
          <TabPanel value={1} sx={{ overflow: "auto", padding: 0 }}>
            <table className="list-table">
              <tr>
                {/* <th style={{ maxWidth: 150, width: 100 }}>Logo</th>
                <th style={{ maxWidth: 150, width: 100 }}>Name & Symbol</th> */}
                {/* <th>Change</th>
                <th>Trend</th>
                <th>Market Cap</th>
                <th>Volume</th> */}
              </tr>
              {data.length === 0 ? (
                <p>No Crypto Currencies Found</p>
              ) : (
                data.map((coin, i) => <List coin={coin} key={i} delay={i} />)
              )}
            </table>
          </TabPanel>
        </TabContext>
      </ThemeProvider>
    </div>
  );
}

export default DashboardWrapper;
