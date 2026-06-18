const express = require("express");
const router = express.Router();

const Product = require("../models/Product");

/* GET ALL PRODUCTS */

router.get("/", async (req, res) => {

  try {

    const products =
      await Product.find();

    res.status(200).json(products);

  }

  catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Failed to fetch products"
    });

  }

});

/* ADD PRODUCT */

router.post("/", async (req, res) => {

  try {

    const {
      name,
      price,
      image,
      description
    } = req.body;

    const product = new Product({
      name,
      price,
      image,
      description
    });

    await product.save();

    res.status(201).json({
      message: "Product added successfully"
    });

  }

  catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Failed to add product"
    });

  }

});

module.exports = router;