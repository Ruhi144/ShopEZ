import Dashboard from './Dashboard';
import './App.css';
import axios from "axios";
import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Products from "./pages/Products";
import Payment from "./pages/Payment";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Portfolio from "./pages/Portfolio";
import Watchlist from "./pages/Watchlist";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/orderSuccess";
import Orders from "./pages/Orders";
import Settings from "./pages/Settings";
import AIInsights from "./pages/AIInsights";
import TrackOrder from "./pages/TrackOrder";
import ProtectedRoute from "./ProtectedRoute";

function Home() {

  /* STOCK DATA */

  const stocks = [
    { name: "Apple", price: "$192", change: "+2.4%" },
    { name: "Tesla", price: "$241", change: "+1.8%" },
    { name: "NVIDIA", price: "$890", change: "+4.2%" }
  ];

  /* PRODUCT DATA */

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  useEffect(() => {

  const fetchProducts = async () => {

    try {

      const res = await axios.get(
        "http://localhost:5000/api/products"
      );

      setProducts(res.data);

    }

    catch (error) {

      console.log(error);

    }

  };
  fetchProducts();

}, []);
  const filteredProducts = products.filter(
  (product) =>
    product.name
      .toLowerCase()
      .includes(search.toLowerCase())
);
  return (

    <div className="app">

      {/* NAVBAR */}

      <nav className="navbar">

        <h2 className="logo">
          ShopEZ
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
          Smart Shopping & Investment Platform
        </h1>

        <p>
          Shop Smart. Invest Smarter.
        </p>

      <div className="hero-buttons">

      <Link to="/products">
        <button className="explore-btn">
          Shop Now
        </button>
      </Link>

      <Link to="/portfolio">
        <button className="secondary-btn">
          View Portfolio
        </button>
      </Link>

    </div>

      </section>
      <section className="featured-preview">

      <h2>🔥 Trending Products</h2>

      <div className="preview-grid">

        {products.slice(0, 4).map((product) => (

          <div className="preview-card" key={product._id}>

            <img
              src={product.image}
              alt={product.name}
            />

            <h3>{product.name}</h3>

            <p>${product.price}</p>

          </div>

        ))}

      </div>

    </section>
      {/* ANALYTICS SECTION */}

      <section className="analytics-section">

        <div className="analytics-card">
          <h2>$12.4B</h2>
          <p>Total Market Volume</p>
        </div>

        <div className="analytics-card">
          <h2>24K+</h2>
          <p>Active Investors</p>
        </div>

        <div className="analytics-card">
          <h2>94%</h2>
          <p>AI Prediction Accuracy</p>
        </div>

        <div className="analytics-card">
          <h2>AI & Tech</h2>
          <p>Top Performing Sector</p>
        </div>

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
            Tech sector and smart gadgets are trending strongly today.
          </p>

        </div>

      </section>

      {/* DASHBOARD */}

      <Dashboard />

      {/* STOCK SECTION */}

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

      {/* PRODUCTS SECTION */}

      <section className="products-section">

        <h2>
          Shop Products
        </h2>

        <div className="product-grid">

          {filteredProducts.map((product, index) => (

            <div className="product-card" key={index}>

              <img
                src={product.image}
                alt={product.name}
              />

              <h3>{product.name}</h3>

              <p>${product.price}</p>

              <p>{product.description}</p>

              <button
                className="buy-btn"
                onClick={() => {

                  const existingCart =
                    JSON.parse(
                      localStorage.getItem("cart")
                    ) || [];

                  existingCart.push(product);

                  localStorage.setItem(
                    "cart",
                    JSON.stringify(existingCart)
                  );

                  navigate("/cart");

                }}
              >
                Add to Cart
              </button>

            </div>

          ))}

        </div>

      </section>

    </div>
  );
}

/* ROUTES */

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/watchlist" element={<Watchlist />} />

        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<Payment />} />
        <Route
        path="/order-success"
        element={<OrderSuccess />}
        />
        <Route
          path="/orders"
          element={<Orders />}
        />
        <Route path="/settings" element={<Settings />} />
        <Route path="/ai-insights" element={<AIInsights />} />
        <Route
          path="/track-order"
          element={<TrackOrder />}
        />
        <Route path="/orders" element={<Orders />} />

        <Route
          path="/track-order"
          element={<TrackOrder />}
        />

      </Routes>

    </BrowserRouter>

  );
}
export default App;