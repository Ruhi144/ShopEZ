import Dashboard from './Dashboard';
import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Portfolio from "./pages/Portfolio";
import Watchlist from "./pages/Watchlist";
import AIInsights from "./pages/AIInsights";

function Home() {

  const stocks = [
    { name: "Apple", price: "$192", change: "+2.4%" },
    { name: "Tesla", price: "$241", change: "+1.8%" },
    { name: "NVIDIA", price: "$890", change: "+4.2%" }
  ];

  return (
    <div className="app">

      {/* NAVBAR */}

      <nav className="navbar">

        <h2 className="logo">
          ShopEZ Stocks
        </h2>

        <div>

          <Link to="/login">
            <button className="login-btn">
              Login
            </button>
          </Link>

          <Link to="/register">
            <button className="register-btn">
              Register
            </button>
          </Link>

        </div>

      </nav>

      {/* HERO SECTION */}

      <section className="hero">

        <h1>
          Trade Smarter With AI Insights
        </h1>

        <p>
          Track live market trends,
          manage portfolios,
          and explore intelligent stock analytics.
        </p>

        <Link to="/portfolio">

          <button className="explore-btn">
            Explore Market
          </button>

        </Link>

      </section>

      {/* MARKET MOOD */}

      <section className="market-mood">

        <h2>
          Market Sentiment
        </h2>

        <div className="mood-card">

          <h3>
            Bullish 📈
          </h3>

          <p>
            Tech sector is showing strong momentum today.
          </p>

        </div>

      </section>

      {/* DASHBOARD */}

      <Dashboard />

      {/* STOCKS */}

      <section className="stocks-section">

        <h2>
          Trending Stocks
        </h2>

        <div className="stock-grid">

          {stocks.map((stock, index) => (

            <div className="stock-card" key={index}>

              <h3>{stock.name}</h3>

              <h1>{stock.price}</h1>

              <p className="green">
                {stock.change}
              </p>

            </div>

          ))}

        </div>

      </section>

    </div>
  );
}

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/portfolio" element={<Portfolio />} />

        <Route path="/watchlist" element={<Watchlist />} />

        <Route path="/ai-insights" element={<AIInsights />} />

      </Routes>

    </BrowserRouter>

  );
}

export default App;