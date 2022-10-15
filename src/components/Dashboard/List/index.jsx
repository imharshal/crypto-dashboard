import React, { useEffect, useState } from "react";
import "./styles.css";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";

function List({ coin }) {
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

  const [volume, setVolume] = useState(coin.total_volume);

  useEffect(() => {
    if (volume) {
      if (volume >= 1000 && volume < 1000000) {
        setVolume(
          volume.toString().slice(0, -3) +
            "." +
            volume.toString().slice(-3, -1) +
            "K"
        );
      } else if (volume >= 1000000 && volume < 1000000000) {
        setVolume(
          volume.toString().slice(0, -6) +
            "." +
            volume.toString().slice(-6, -4) +
            "M"
        );
      } else if (volume >= 1000000000) {
        setVolume(
          volume.toString().slice(0, -9) +
            "." +
            volume.toString().slice(-9, -7) +
            "B"
        );
      }
    }
  }, [volume]);

  return (
    <a href={`/coin?${coin.id}`} className="list-wrapper">
      <tr className="list-wrapper">
        <td className="image-td">
          <img src={coin.image} className="list-logo" alt="crypto-logo" />
        </td>

        <td style={{ maxWidth: 150, width: 100 }}>
          <p className="symbol td-text">{coin.symbol}-USD</p>
          <p className="list-name" style={{ marginBottom: 0 }}>
            {coin.name}
          </p>
        </td>
        <td style={{ width: 100 }}>
          <div className={`list-change ${trend.class}`}>
            {trend.sign + coin.price_change_percentage_24h.toFixed(2) + " %"}
          </div>
        </td>
        <td style={{ width: 100 }}>
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
          <div className="list-badge" data-title="Market cap">
            ${coin.market_cap.toLocaleString()}
          </div>
        </td>
        <td>
          <div className="list-badge desktop-only" data-title="Total Volume">
            {coin.total_volume.toLocaleString()}
          </div>
          <div className="list-badge mobile-only" data-title="Total Volume">
            {volume}
          </div>
        </td>
      </tr>
    </a>
  );
}

export default List;
