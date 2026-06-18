const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const productRoutes =
require("./routes/productRoutes");

require("dotenv").config({ path: "./.env" });

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
console.log("Auth routes mounted");

/* MONGODB CONNECTION */

mongoose
  .connect(process.env.MONGO_URI)

  .then(() => {
    console.log("MongoDB Connected Successfully");
  })

  .catch((error) => {
    console.error("MongoDB Error:");
    console.error(error);
    console.error(error.message);
  });
  
/* TEST ROUTE */

app.get("/", (req, res) => {
  res.send("ShopEZ Backend Running 🚀");
});

/* SERVER */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});