const mongoose = require("mongoose");
const express = require("express");

const InquirySchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const InquiryModel = mongoose.model("Inquiry", InquirySchema);
module.exports=InquiryModel
