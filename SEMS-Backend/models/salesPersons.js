const mongoose = require("mongoose");

const SalesPersonSchema = new mongoose.Schema({
  RoleId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Role",
  },
  email: { type: String },
  first_name: { type: String },
  //   id: { type: String },
  last_name: { type: String },
  password: { type: String },
  phone_number: { type: String },
  status: { type: String },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
  deletedAt: { type: Date, default: Date.now() },
});

const SalesPersonModel = mongoose.model("SalesPerson", SalesPersonSchema);
module.exports = SalesPersonModel;
