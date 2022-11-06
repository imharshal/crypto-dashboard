import React from "react";
import { List, ListItem, ListItemText } from "@mui/material";
function CoinList() {
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
        position: "relative",
        overflow: "auto",
        maxHeight: 300,
        "& ul": { padding: 0 },
      }}
    >
      <ListItem sx={{ fontWeight: "bolder" }}>
        <ListItemText primary="Coin" />
        <ListItemText primary="Change" />
        <ListItemText primary="Price" />
      </ListItem>
      <ListItem>
        <ListItemText primary="List 1" />
      </ListItem>
      <ListItem>
        <ListItemText primary="List 1" />
      </ListItem>
    </List>
  );
}

export default CoinList;
