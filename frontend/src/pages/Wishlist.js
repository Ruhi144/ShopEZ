import React, { useEffect, useState } from "react";

function Wishlist() {

  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {

    const items =
      JSON.parse(localStorage.getItem("wishlist")) || [];

    setWishlist(items);

  }, []);

  return (

    <div className="wishlist-page">

      <h1> My Wishlist</h1>

      <div className="product-grid">

        {wishlist.length === 0 ? (

          <p>No items in wishlist</p>

        ) : (

          wishlist.map((product, index) => (

            <div
              className="product-card"
              key={index}
            >

              <img
                src={product.image}
                alt={product.name}
              />

              <h3>{product.name}</h3>

              <p>${product.price}</p>

              <p>{product.description}</p>

            </div>

          ))

        )}

      </div>

    </div>

  );

}

export default Wishlist;