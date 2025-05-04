const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema({
  password: { type: String, required: true },
  first_name: { type: String },
  last_name: { type: String },
  phone_number: { type: String },
  email: { type: String, required: true, unique: true },
  roleId: { type: mongoose.Schema.Types.ObjectId, ref: "Role" },
  status: { type: String, enum: ["active", "inactive"], default: "active" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  lastLogin: { type: Date, default: Date.now },
  deletedAt: { type: Date },
  deletedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  isDeleted: { type: Boolean, default: false },
});

const UserModel = mongoose.model("User", UserSchema);
module.exports = UserModel;
