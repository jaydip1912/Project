const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: "Customer" },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  customerName: { type: String },
  customerEmail: { type: String },
  customerPhone: { type: String },
  customerAddress: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  deletedAt: { type: Date },
  deletedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  isDeleted: { type: Boolean, default: false },
});

const CustomerModel = mongoose.model("Customer", CustomerSchema);
module.exports = CustomerModel;
