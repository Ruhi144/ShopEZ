import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

import {
  Line
} from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Dashboard() {

  /* LIVE STOCK PRICES */

  const [prices, setPrices] = useState([
    {
      name: "Apple",
      price: 192
    },
    {
      name: "Tesla",
      price: 241
    },
    {
      name: "NVIDIA",
      price: 890
    }
  ]);

  /* PRICE ANIMATION */

  useEffect(() => {

    const interval = setInterval(() => {

      setPrices((prevPrices) =>

        prevPrices.map((stock) => ({

          ...stock,

          price:
            stock.price +
            (Math.random() * 10 - 5)

        }))

      );

    }, 3000);

    return () => clearInterval(interval);

  }, []);

  /* CHART DATA */

  const chartData = {

    labels: [
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri"
    ],

    datasets: [
      {
        label: "Portfolio Growth",

        data: [
          12000,
          14000,
          13500,
          17000,
          24500
        ],

        borderColor: "#3b82f6",

        backgroundColor: "#3b82f6",

        tension: 0.4
      }
    ]
  };

  return (

    <div className="dashboard-layout">

      {/* SIDEBAR */}

      <div className="sidebar">

        <h2 className="sidebar-logo">
          ShopEZ
        </h2>
        <button
          className="logout-btn"
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/login";
          }}
        >
          Logout 🚪
        </button>

        <ul className="sidebar-menu">

        <Link to="/products">
            <li>🛒 Products</li>
        </Link>

        <Link to="/cart">
          <li>🛒 Cart</li>
        </Link>
        <Link to="/track-order">
          <div className="menu-item">
            <li>🚚 Track Order</li>
          </div>
        </Link>

        <Link to="/orders">
          <div className="menu-item">
            <li>📦 Orders</li>
          </div>
        </Link>     

        <Link to="/portfolio">
            <li>💼 Portfolio</li>
        </Link>

        <Link to="/wishlist">
          <li>❤️ Wishlist</li>
        </Link>

        <Link to="/watchlist">
            <li>⭐ Watchlist</li>
        </Link>

        <Link to="/ai-insights">
            <li>🤖 AI Insights</li>
        </Link>

        <Link to="/settings">
          <li>⚙️ Settings</li>
        </Link>

        </ul>

      </div>

      {/* MAIN CONTENT */}

      <div className="dashboard-content">

        <h1 className="dashboard-title">
          Market Dashboard
        </h1>

        {/* STATS */}

        <div className="stats-grid">

          <div className="stats-card">

            <h3>Total Balance</h3>

            <h1>
              $24,500.84
            </h1>

          </div>

          <div className="stats-card">

            <h3>Total Profit</h3>

            <h1 className="green">
              +$4,200.12
            </h1>

          </div>

          <div className="stats-card">

            <h3>Portfolio Growth</h3>

            <h1 className="green">
              +18.4%
            </h1>

          </div>

        </div>

        {/* CHART */}

        <div className="chart-container">

          <h2>
            Portfolio Analytics
          </h2>

          <Line data={chartData} />

        </div>

        {/* AI INSIGHTS */}

        <div className="chart-container">

          <h2>
            AI Market Insights 🤖
          </h2>

          <p className="mt-3">

            AI predicts strong bullish momentum
            in technology stocks today.

            NVIDIA and Apple are currently
            showing positive breakout patterns
            with increased investor confidence.

          </p>

        </div>

        {/* STOCKS */}

        <h2 className="trending-title">
          Trending Stocks
        </h2>

        <div className="stock-grid">

          {prices.map((stock, index) => (

            <div className="stock-card" key={index}>

              <h2>
                {stock.name}
              </h2>

              <h1>
                ${stock.price.toFixed(2)}
              </h1>

              <p
                className={
                  stock.price > 300
                    ? "green"
                    : "red"
                }
              >

                {stock.price > 300
                  ? "Bullish 📈"
                  : "Bearish 📉"}

              </p>

              <button className="buy-btn">
                Buy Stock
              </button>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default Dashboard;