import React from "react";

function Watchlist() {
  return (
    <div className="page-container">
      <h1>My Watchlist ⭐</h1>

      <div className="stock-grid">

        <div className="stock-card">
          <h2>Netflix</h2>
          <h1>$610</h1>
        </div>

        <div className="stock-card">
          <h2>Amazon</h2>
          <h1>$182</h1>
        </div>

      </div>
    </div>
  );
}

export default Watchlist;