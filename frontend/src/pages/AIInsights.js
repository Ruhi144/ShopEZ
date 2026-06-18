import React from "react";

function AIInsights() {

  const insights = [
    {
      title: "Apple Stock Prediction",
      description:
        "AI predicts a bullish trend for Apple due to strong iPhone and AI-chip demand.",
      status: "Bullish 📈"
    },

    {
      title: "Tesla Market Analysis",
      description:
        "Tesla may experience short-term volatility due to increased EV competition.",
      status: "Moderate ⚡"
    },

    {
      title: "AI & Tech Sector",
      description:
        "Artificial Intelligence and semiconductor industries are expected to dominate this quarter.",
      status: "Trending 🚀"
    }
  ];

  return (

    <div className="ai-page">

      <h1 className="ai-title">
        AI Market Insights
      </h1>

      <p className="ai-subtitle">
        Smart predictions and market intelligence powered by AI analytics.
      </p>

      <div className="ai-grid">

        {insights.map((item, index) => (

          <div className="ai-card" key={index}>

            <h2>{item.title}</h2>

            <p>{item.description}</p>

            <span>{item.status}</span>

          </div>

        ))}

      </div>

    </div>
  );
}

export default AIInsights;