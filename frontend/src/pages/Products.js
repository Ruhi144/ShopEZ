import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Products() {

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {

    const fetchProducts = async () => {

      try {

        const res = await axios.get(
          "http://localhost:5000/api/products"
        );

        setProducts(res.data);

      }

      catch (err) {

        console.log(err);

      }

    };

    fetchProducts();

  }, []);

  const filteredProducts = products.filter(
    (product) =>
      product.name
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (

    <div className="products-page">

      <h1>Explore Our Products</h1>

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="products-search"
      />

      <div className="product-grid">

        {filteredProducts.map((product) => (

          <div
            className="product-card"
            key={product._id}
          >

            <img
              src={product.image}
              alt={product.name}
            />

            <h3>{product.name}</h3>

            <p>${product.price}</p>

            <p>{product.description}</p>

            <button
            className="buy-btn"
            onClick={() => {

                const existingCart =
                JSON.parse(
                    localStorage.getItem("cart")
                ) || [];

                existingCart.push(product);

                localStorage.setItem(
                "cart",
                JSON.stringify(existingCart)
                );

                navigate("/cart");

            }}
            >
            Add to Cart
            </button>
            <button
            className="wishlist-btn"
            onClick={() => {

                const existingWishlist =
                JSON.parse(
                    localStorage.getItem("wishlist")
                ) || [];

                existingWishlist.push(product);

                localStorage.setItem(
                "wishlist",
                JSON.stringify(existingWishlist)
                );

                alert("Added to Wishlist");

            }}
            >
            ❤️ Wishlist
            </button>
          </div>

        ))}

      </div>

    </div>

  );

}

export default Products;