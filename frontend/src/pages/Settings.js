import React from "react";

function Settings() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#07122a",
        color: "white",
        padding: "40px"
      }}
    >
      <h1>⚙️ Settings</h1>

      <div
        style={{
          maxWidth: "700px",
          marginTop: "30px",
          background: "#0d1b3d",
          padding: "30px",
          borderRadius: "20px"
        }}
      >
        <h2>Profile Information</h2>

        <input
          placeholder="Full Name"
          style={inputStyle}
        />

        <input
          placeholder="Email"
          style={inputStyle}
        />

        <input
          placeholder="Phone Number"
          style={inputStyle}
        />

        <h2 style={{ marginTop: "30px" }}>
          Security
        </h2>

        <input
          type="password"
          placeholder="New Password"
          style={inputStyle}
        />

        <button
        style={saveBtn}
        onClick={() =>
            alert("Settings Updated Successfully")
        }
        >
        Save Changes
        </button>

        <button
        style={logoutBtn}
        onClick={() => {
            localStorage.clear();
            window.location.href = "/";
        }}
        >
        Logout
        </button>

      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginTop: "15px",
  borderRadius: "10px",
  border: "1px solid #2d4a8a",
  background: "#07122a",
  color: "white"
};

const saveBtn = {
  width: "100%",
  padding: "15px",
  marginTop: "20px",
  border: "none",
  borderRadius: "10px",
  background:
    "linear-gradient(90deg,#3b82f6,#a855f7)",
  color: "white",
  cursor: "pointer"
};

const logoutBtn = {
  width: "100%",
  padding: "15px",
  marginTop: "15px",
  border: "none",
  borderRadius: "10px",
  background: "#ef4444",
  color: "white",
  cursor: "pointer"
};

export default Settings;