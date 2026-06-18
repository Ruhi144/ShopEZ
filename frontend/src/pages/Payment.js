import React from "react";
import { useNavigate } from "react-router-dom"


function Payment() {
 const navigate = useNavigate();
  return (

    <div
      style={{
        minHeight: "100vh",
        background: "#07122a",
        color: "white",
        padding: "40px"
      }}
    >

      <h1>Payment</h1>

      <div
        style={{
          maxWidth: "600px",
          margin: "auto",
          background: "#0d1b3d",
          padding: "30px",
          borderRadius: "20px"
        }}
      >

        <h2>Select Payment Method</h2>

        <div style={{ marginTop: "20px" }}>
          <input type="radio" name="payment" />
          <label> UPI Payment</label>
        </div>

        <div style={{ marginTop: "20px" }}>
          <input type="radio" name="payment" />
          <label> Credit / Debit Card</label>
        </div>

        <div style={{ marginTop: "20px" }}>
          <input type="radio" name="payment" />
          <label> Cash on Delivery</label>
        </div>

        <button
        style={{
            width: "100%",
            padding: "15px",
            marginTop: "20px",
            border: "none",
            borderRadius: "12px",
            fontSize: "18px",
            cursor: "pointer",
            background:
            "linear-gradient(90deg,#3b82f6,#a855f7)",
            color: "white"
        }}
        onClick={() => {

        const cart =
        JSON.parse(localStorage.getItem("cart")) || [];

        const total =
        cart.reduce(
            (sum, item) => sum + Number(item.price),
            0
        );

        const orders =
        JSON.parse(localStorage.getItem("orders")) || [];

        orders.push({
        orderId: "SEZ" + Date.now(),
        total,
        status: "Processing"
        });

        localStorage.setItem(
        "orders",
        JSON.stringify(orders)
        );

        localStorage.removeItem("cart");

        navigate("/order-success");

        }}
        >
        Confirm Payment
        </button>

      </div>

    </div>

  );

}

export default Payment;