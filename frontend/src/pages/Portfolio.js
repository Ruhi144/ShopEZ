import React from "react";

function Portfolio() {
  return (
    <div className="page-container">
      <h1>My Portfolio 💼</h1>

      <div className="stats-grid">

        <div className="stats-card">
          <h3>Total Investment</h3>
          <h1>$12,400</h1>
        </div>

        <div className="stats-card">
          <h3>Total Profit</h3>
          <h1 className="green">+$2,850</h1>
        </div>

      </div>
    </div>
  );
}

export default Portfolio;