import React from "react";
import "./styles.css";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import { convertNumbers } from "../../../functions/convertNumbers";
import { useNavigate } from "react-router-dom";
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
        <img src={coin.image} className="list-logo" alt="crypto-logo" />
      </td>

      <td>
        <p className="symbol td-text">{coin.symbol}-USD</p>
        <p className="list-name" style={{ marginBottom: 0 }}>
          {coin.name}
        </p>
      </td>
      <td style={{ width: 100, minWidth: 80 }}>
        <div className={`list-change ${trend.class} td-text`}>
          {trend.sign + coin.price_change_percentage_24h.toFixed(2) + " %"}
        </div>
      </td>
      <td style={{ width: 80 }} className="desktop-only">
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
      </td>
      <td style={{ width: "20%", alignItem: "center" }}>
        <div className="list-badge desktop-only" data-title="Market cap">
          ${coin.market_cap.toLocaleString()}
        </div>
        <div className="list-badge mobile-only td-text" data-title="Market cap">
          ${convertNumbers(coin.market_cap)}
        </div>
      </td>
      <td>
        <div className="list-badge desktop-only" data-title="Total Volume">
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
