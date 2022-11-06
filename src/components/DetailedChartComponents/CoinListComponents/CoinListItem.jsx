import React from "react";
import { ListItem, ListItemText } from "@mui/material";
function CoinListItem({ coinName, coinPrice }) {
  return (
    <ListItem>
      <ListItemText primary={coinName} />
      <ListItemText primary={coinPrice} />
    </ListItem>
  );
}

export default CoinListItem;
