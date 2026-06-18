import { Link } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

function Register() {

  const [showPassword, setShowPassword] = useState(false);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  /* REGISTER FUNCTION */

  const handleRegister = async () => {

    if (password !== confirmPassword) {

      alert("Passwords do not match");
      return;

    }

    try {

      const response = await axios.post(

        "http://127.0.0.1:5000/api/auth/register",

        {
          username,
          email,
          password
        }

      );

      alert(response.data.message);

    }

catch (error) {

  console.log(error);

  alert(
    JSON.stringify(error.response?.data) ||
    "Registration failed"
  );

}

  };

  return (

    <div className="page-container">

      <div className="form-card">

        <h1>Create Account ✨</h1>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) =>
            setUsername(e.target.value)
          }
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        {/* PASSWORD */}

        <div className="password-box">

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
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

        {/* CONFIRM PASSWORD */}

        <div className="password-box">

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) =>
              setConfirmPassword(e.target.value)
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
          onClick={handleRegister}
        >
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