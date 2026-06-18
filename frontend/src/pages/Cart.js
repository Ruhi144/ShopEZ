import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();

  const [cart, setCart] = useState([]);

  useEffect(() => {

    const savedCart =
      JSON.parse(localStorage.getItem("cart")) || [];

    setCart(savedCart);

  }, []);

  const total = cart.reduce(
  (sum, item) => sum + Number(item.price),
  0
);

  return (

    <div className="page-container">

      <h1>My Cart 🛒</h1>
      <h2>Total Items: {cart.length}</h2>
      <h2>Total Price: ${total}</h2>

      {cart.length === 0 ? (

        <p>No items in cart yet.</p>

      ) : (

        <div className="product-grid">

        {cart.map((product, index) => (

        <div className="product-card" key={index}>

            <img
            src={product.image}
            alt={product.name}
            />

            <h3>{product.name}</h3>

            <p>${product.price}</p>

            <button
            className="buy-btn"
            onClick={() => {

                const updatedCart =
                cart.filter((_, i) => i !== index);

                localStorage.setItem(
                "cart",
                JSON.stringify(updatedCart)
                );

                setCart(updatedCart);

            }}
            >
            Remove
            </button>

        </div>

        ))}

        </div>

      )}
      <button
    className="checkout-btn"
    onClick={() => navigate("/checkout")}
    >
    Checkout
    </button>

    </div>

  );

}

export default Cart;