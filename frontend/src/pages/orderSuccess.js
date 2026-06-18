import React from "react";
import { useNavigate } from "react-router-dom";

function OrderSuccess() {
    const navigate = useNavigate();
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#07122a",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}
    >
      <h1>🎉 Order Placed Successfully!</h1>

      <p>
        Thank you for shopping with ShopEZ.
      </p>

      <h3>
        Order ID: #SEZ2026
      </h3>

      <p>
        Estimated Delivery: 3-5 Days
      </p>

    <button
    style={{
        marginTop: "20px",
        padding: "12px 25px",
        border: "none",
        borderRadius: "10px",
        background:
        "linear-gradient(90deg,#3b82f6,#a855f7)",
        color: "white",
        cursor: "pointer",
        fontSize: "16px"
    }}
    onClick={() => navigate("/orders")}
    >
    View My Orders
    </button>
    </div>
  );
}

export default OrderSuccess;