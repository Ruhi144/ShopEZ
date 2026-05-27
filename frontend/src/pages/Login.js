import { Link } from "react-router-dom";
import React, { useState } from "react";

function Login() {

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="page-container">

      <div className="form-card">

        <h1>Welcome Back 👋</h1>

        <input
          type="email"
          placeholder="Enter Email"
        />

        <div className="password-box">

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter Password"
          />

          <span
            className="eye-icon"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide" : "👁"}
          </span>

        </div>

        <button className="main-btn">
          Login
        </button>

        <p className="bottom-text">
          Don’t have an account?
          <Link to="/register"> Register</Link>
        </p>

      </div>

    </div>
  );
}

export default Login;