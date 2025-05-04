const express = require("express");
const ProductDetailsModel = require("../models/productDetails");
const router = express.Router();

router.get("/productDetails", async (req, res) => {
  const productDetailsFromDB = await ProductDetailsModel.find({});
  res.send(productDetailsFromDB);
});

router.post("/CreateProductDetails", async (req, res) => {
  try {
    const body = req.body;
    const { productDetails, image, product_name } = body;
    const newProductDetails = new ProductDetailsModel({
      productDetails: productDetails,
      image: image,
      product_name: product_name,
    });
    const savedProductDetails = await newProductDetails.save();
    res.send(savedProductDetails);
  } catch (error) {
    console.error("Error Create ProductDetails", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});
module.exports = router;
