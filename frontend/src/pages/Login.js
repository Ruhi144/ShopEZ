import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    

    try {

      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password
        }
      );

      localStorage.setItem(
        "token",
        res.data.token
      );

      alert("Login Successful 🎉");
      navigate("/dashboard");

    }

    catch (error) {

      console.log("FULL ERROR:", error);

      console.log("RESPONSE:", error.response);

      alert(
        JSON.stringify(error.response?.data) ||
        "Login Failed"
      );

    }

  };

  return (
    <div className="page-container">

      <div className="form-card">

        <h1>Welcome Back 👋</h1>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <div className="password-box">

          <input
            type={
              showPassword
                ? "text"
                : "password"
            }
            placeholder="Enter Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <span
            className="eye-icon"
            onClick={() =>
              setShowPassword(!showPassword)
            }
          >
            {showPassword ? "Hide" : "👁"}
          </span>

        </div>

        <button
          className="main-btn"
          onClick={handleLogin}
        >
          Login
        </button>

        <p className="bottom-text">
          Don’t have an account?
          <Link to="/register">
            {" "}Register
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Login;