const express = require("express");
const LineItemModel = require("../models/LineItem");
const router = express.Router();

router.get("/lineItem", async (req, res) => {
  const lineItemFromDB = await LineItemModel.find({});
  res.send(lineItemFromDB);
});

router.post("/createLineItem", async (req, res) => {
  const body = req.body;
  const { amount, description, quantity, price } = body;
  const newLineItem = new LineItemModel({
    amount: amount,
    description: description,
    quantity: quantity,
    price: price,
  });

  const savedLineItem = await newLineItem.save();
  res.send(savedLineItem);
});

module.exports = router;
