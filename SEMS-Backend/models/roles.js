const mongoose = require("mongoose");

const RoleSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true,
  },
  roleName: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
  deletedAt: {
    type: Date,
    default: Date.now(),
  },
});

const RoleModel = mongoose.model("Role", RoleSchema);
module.exports = RoleModel;
