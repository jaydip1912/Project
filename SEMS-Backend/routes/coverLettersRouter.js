const express = require("express");
const router = express.Router();
const CoverLetterModel = require("../models/coverLetters");

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

router.put("/updateCoverLetter", async (req, res) => {
  try {
    const body = req.body;
    const id = req.query.id || req.params.id;
    console.log("ID:", id);

    const { coverLetterText } = body;
    console.log("Cover Letter Text:", coverLetterText);
    const updateCoverLetter = await CoverLetterModel.findByIdAndUpdate(
      id,
      { coverLetterText: coverLetterText },
      { new: true }
    );
    if (!updateCoverLetter) {
      return res.status(404).json({ message: "Cover letter not found" });
    }
    console.log("Updated Cover Letter:", updateCoverLetter);

    res.send(updateCoverLetter);
    // res.status(200).json(updateCoverLetter);
  } catch (error) {
    console.error("Error updating cover letter!", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
