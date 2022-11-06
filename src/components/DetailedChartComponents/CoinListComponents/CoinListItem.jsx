import React from "react";
import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
function CoinListItem({ coin }) {
  return (
    <ListItem sx={{ fontWeight: "bolder" }}>
      <ListItemIcon>
        <img src={coin.image} className="list-logo" alt="crypto-logo" />
      </ListItemIcon>
      <ListItemText primary={coin.name} />
      <ListItemText primary={coin.current_price} />
      <ListItemText primary="Price" />
    </ListItem>
  );
}

export default CoinListItem;
