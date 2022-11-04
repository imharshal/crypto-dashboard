import React from "react";
import "./styles.css";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import { convertNumbers } from "../../../functions/convertNumbers";
import { useNavigate } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";

function List({ coin }) {
  const navigate = useNavigate();

  const onGoingTrend = coin.price_change_percentage_24h > 0 ? "up" : "down";
  const uptrend = {
    sign: "+",
    class: "uptrend",
    color: "green",
  };
  const downtrend = {
    sign: "",
    class: "downtrend",
    color: "red",
  };
  const trend = onGoingTrend === "up" ? uptrend : downtrend;
  const showCoinPage = (coinId) => {
    console.log("coinid>>>", coinId);
    navigate(`/coin?${coinId}`);
  };
  return (
    <tr className="list-wrapper " onClick={() => showCoinPage(coin.id)}>
      <td className="image-td">
        <Tooltip title="Logo">
          <img src={coin.image} className="list-logo" alt="crypto-logo" />
        </Tooltip>
      </td>

      <td>
        <Tooltip title="Symbol">
          <p className="symbol td-text">{coin.symbol}-USD</p>
        </Tooltip>
        <Tooltip title="Name">
          <p className="list-name" style={{ marginBottom: 0 }}>
            {coin.name}
          </p>
        </Tooltip>
      </td>
      <td>
        <Tooltip title="Price Change">
          <div className={`list-change ${trend.class} td-text`}>
            {trend.sign + coin.price_change_percentage_24h.toFixed(2) + " %"}
          </div>
        </Tooltip>
      </td>
      <td style={{ textAlign: "left" }} className="desktop-only">
        <Tooltip title="Trend Direction">
          {onGoingTrend === "up" ? (
            <TrendingUpRoundedIcon
              fontSize="large"
              className={`list-trending-icon ${trend.class}`}
            />
          ) : (
            <TrendingDownRoundedIcon
              fontSize="large"
              className={`list-trending-icon ${trend.class}`}
            />
          )}
        </Tooltip>
      </td>
      {/* ------------- */}

      <td>
        <Tooltip title="Current Price">
          <span className={`td-text ${trend.class}`}>
            ${coin.current_price.toLocaleString()}
          </span>
        </Tooltip>
      </td>

      {/* --------- */}
      <td>
        <div
          className="list-badge desktop-only td-text"
          data-title="Market cap"
        >
          ${coin.market_cap.toLocaleString()}
        </div>
        <div className="list-badge mobile-only td-text" data-title="Market cap">
          ${convertNumbers(coin.market_cap)}
        </div>
      </td>
      <td className="desktop-only">
        <div
          className="list-badge desktop-only td-text"
          data-title="Total Volume"
        >
          {coin.total_volume.toLocaleString()}
        </div>
        <div
          className="list-badge mobile-only td-text"
          data-title="Total Volume"
        >
          {convertNumbers(coin.total_volume)}
        </div>
      </td>
    </tr>
  );
}

export default List;
