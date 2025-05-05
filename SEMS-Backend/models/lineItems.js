const mongoose = require("mongoose");

const LineItemSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  inquiry_id: { type: mongoose.Schema.Types.ObjectId },
  amount: { type: String },
  description: { type: String },
  quantity: { type: String },
  price: { type: String },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});

const LineItemModel = mongoose.model("LineItem", LineItemSchema);
module.exports = LineItemModel;
