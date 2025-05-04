const express = require("express");
const router = express.Router();
const CoverLetterModel = require("../models/coverLetter");

router.get("/coverLetter", async (req, res) => {
  const coverLetterFromDB = await CoverLetterModel.find({});
  res.send(coverLetterFromDB);
});

router.post("/createCoverLetter", async (req, res) => {
  try {
    const body = req.body;
    const { coverLetterText } = body;
    const newCoverLetter = new CoverLetterModel({
      coverLetterText: coverLetterText,
    });
    const savedCoverLetter = await newCoverLetter.save();
    res.send(savedCoverLetter);
    // res.status(201).json(savedCoverLetter);
  } catch (error) {
    console.error("Error creating cover letter!", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
