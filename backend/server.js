const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config({ path: "./.env" });
console.log(process.env.MONGO_URI);

const app = express();

app.use(cors());
app.use(express.json());

/* MONGODB CONNECTION */

mongoose
  .connect(process.env.MONGO_URI)

  .then(() => {
    console.log("MongoDB Connected Successfully");
  })

  .catch((error) => {
    console.log(error);
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