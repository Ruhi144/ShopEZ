import { Link } from "react-router-dom";
import React, { useState } from "react";

function Register() {

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="page-container">

      <div className="form-card">

        <h1>Create Account ✨</h1>

        <input
          type="text"
          placeholder="Username"
        />

        <input
          type="email"
          placeholder="Email"
        />

        {/* PASSWORD */}

        <div className="password-box">

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
          />

          <span
            className="eye-icon"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide" : "👁"}
          </span>

        </div>

        {/* CONFIRM PASSWORD */}

        <div className="password-box">

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Confirm Password"
          />

          <span
            className="eye-icon"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide" : "👁"}
          </span>

        </div>

        <button className="main-btn">
          Register
        </button>

        <p className="bottom-text">
          Already have an account?
          <Link to="/login"> Login</Link>
        </p>

      </div>

    </div>
  );
}

export default Register;