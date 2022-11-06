import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Divider,
  Drawer,
  Typography,
  // Link,
} from "@mui/material";

import { ChevronRight } from "@mui/icons-material";
import styled from "@emotion/styled";
import CoinListItem from "./CoinListItem";

const drawerWidth = 340;
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(1),
  // necessary for content to be below app bar
  // ...theme.mixins.toolbar,
  justifyContent: "left",
}));

export default function CoinList({ open, handleListClose }) {
  const API_URL =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

  const [data, setData] = useState([]);
  // const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get(API_URL, { crossDomain: true }).then((response) => {
      if (response.data) {
        console.log(response.data);
        setData(response.data);
        setLoading(false);
      } else {
        console.log("error");
      }
    });
  }, []);

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="persistent"
      anchor="right"
      open={true}
    >
      <DrawerHeader>
        <IconButton onClick={handleListClose}>
          <ChevronRight />
        </IconButton>
        <Typography
          variant="h6"
          textAlign="left"
          fontWeight={600}
          sx={{ color: "var(--grey)" }}
        >
          Coin List
        </Typography>
      </DrawerHeader>
      <Divider />
      {data.map((coin, i) => (
        <CoinListItem coin={coin} />
      ))}
    </Drawer>
  );
}
