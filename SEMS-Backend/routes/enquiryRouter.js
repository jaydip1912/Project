const express = require("express");
const InquiryModel = require("../models/inquiry");
const router = express.Router();

router.get("/inquiry", async (req, res) => {
  const InquiryFromDB = await InquiryModel.find({});
  res.send(InquiryFromDB);
});

router.post("/createInquiry", async (req, res) => {
  try {
    const body = req.body;
    const { name, email, phone, message } = body;
    const newInquiry = new InquiryModel({
      name: name,
      email: email,
      phone: phone,
      message: message,
    });
    const savedInquiry = await newInquiry.save();
    res.send(savedInquiry);
  } catch (error) {
    console.error("Error creating inquiry:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
