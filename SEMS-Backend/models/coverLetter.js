const mongoose = require("mongoose");

const CoverLetterSchema = new mongoose.Schema({
  coverLetterId: { type: mongoose.Schema.Types.ObjectId, ref: "CoverLetter" },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  coverLetterText: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  deletedAt: { type: Date },
  deletedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  isDeleted: { type: Boolean, default: false },
});

const CoverLetterModel = mongoose.model("CoverLetter", CoverLetterSchema);
module.exports = CoverLetterModel;
