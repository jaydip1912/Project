const mongoose = require("mongoose");

const ProductDetailsSchema = new mongoose.Schema({
  productDetails: { type: String },
  image: { type: String },
  product_name: { type: String },
});

const ProductDetailsModel = mongoose.model(
  "ProductDetails",
  ProductDetailsSchema
);
module.exports = ProductDetailsModel;
