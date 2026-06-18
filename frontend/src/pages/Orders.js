import React from "react";
import { useNavigate } from "react-router-dom";

function Orders() {

  const navigate = useNavigate();

  const orders =
    JSON.parse(localStorage.getItem("orders")) || [];

  return (

    <div
      style={{
        minHeight: "100vh",
        background: "#07122a",
        color: "white",
        padding: "40px"
      }}
    >

      <h1>📦 My Orders</h1>

      {orders.length === 0 ? (

        <p>No orders yet.</p>

      ) : (

        orders.map((order, index) => (

          <div
            key={index}
            style={{
              background: "#0d1b3d",
              padding: "20px",
              borderRadius: "15px",
              marginTop: "20px"
            }}
          >

            <h3>
              Order ID: {order.orderId}
            </h3>

            <p>
              Total: ${order.total}
            </p>

            <p>
              Status: {order.status}
            </p>

            <button
              style={{
                marginTop: "15px",
                padding: "10px 20px",
                border: "none",
                borderRadius: "10px",
                background:
                  "linear-gradient(90deg,#3b82f6,#a855f7)",
                color: "white",
                cursor: "pointer"
              }}
              onClick={() => navigate("/track-order")}
            >
              Track Order
            </button>

          </div>

        ))

      )}

    </div>

  );

}

export default Orders;