import React from "react";

function TrackOrder() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#07122a",
        color: "white",
        padding: "40px"
      }}
    >
      <h1>🚚 Track Order</h1>

      <h2>
        Order ID: SEZ1781789299388
      </h2>

      <div
        style={{
          marginTop: "40px",
          fontSize: "22px",
          lineHeight: "60px"
        }}
      >
        <p>✅ Order Placed</p>
        <p>✅ Payment Confirmed</p>
        <p>✅ Packed</p>
        <p>✅ Shipped</p>
        <p>⏳ Out for Delivery</p>
        <p>⬜ Delivered</p>
      </div>

      <h3>
        Estimated Delivery:
        21 June 2026
      </h3>
    </div>
  );
}

export default TrackOrder;