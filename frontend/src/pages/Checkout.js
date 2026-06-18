import React from "react";
import { useNavigate } from "react-router-dom";

function Checkout() {
const navigate = useNavigate();

  const cart =
    JSON.parse(localStorage.getItem("cart")) || [];

  const total =
    cart.reduce(
      (sum, item) => sum + Number(item.price),
      0
    );

  return (

    <div
      style={{
        minHeight: "100vh",
        background: "#07122a",
        color: "white",
        padding: "40px"
      }}
    >

      <h1
        style={{
          textAlign: "center",
          marginBottom: "40px"
        }}
      >
        Checkout
      </h1>

      <div
        style={{
          display: "flex",
          gap: "40px",
          flexWrap: "wrap"
        }}
      >

        {/* LEFT SIDE */}

        <div
          style={{
            flex: 1,
            minWidth: "350px",
            background: "#0d1b3d",
            padding: "30px",
            borderRadius: "20px"
          }}
        >

          <h2>Shipping Information</h2>

          <input
            placeholder="Full Name"
            style={inputStyle}
          />

          <input
            placeholder="Phone Number"
            style={inputStyle}
          />

          <input
            placeholder="Address"
            style={inputStyle}
          />

          <input
            placeholder="City"
            style={inputStyle}
          />

          <input
            placeholder="State"
            style={inputStyle}
          />

          <input
            placeholder="Pincode"
            style={inputStyle}
          />

        </div>

        {/* RIGHT SIDE */}

        <div
          style={{
            flex: 1,
            minWidth: "350px",
            background: "#0d1b3d",
            padding: "30px",
            borderRadius: "20px"
          }}
        >

          <h2>Order Summary</h2>

          {cart.map((item, index) => (

            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "15px"
              }}
            >

              <span>{item.name}</span>

              <span>${item.price}</span>

            </div>

          ))}

          <hr />

          <h2>
            Total: ${total}
          </h2>

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
            onClick={() => navigate("/payment")}
          >
            Proceed to Payment
          </button>

        </div>

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

export default Checkout;