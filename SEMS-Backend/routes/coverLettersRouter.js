const express = require("express");
const router = express.Router();
const CoverLetterModel = require("../models/coverLetters");
const getRequest = require("../utils/getRequest");
const postRequest = require("../utils/postRequest");
const putRequest = require("../utils/putRequest");
const deleteRequest = require("../utils/deleteRequest");

router.get("/coverLetter", async (req, res) => {
  getRequest(req, res, CoverLetterModel);
  // const coverLetterFromDB = await CoverLetterModel.find({});
  // res.send(coverLetterFromDB);
});

router.post("/createCoverLetter", async (req, res) => {
  postRequest(req, res, CoverLetterModel);
  // try {
  //   const body = req.body;
  //   const { coverLetterText } = body;
  //   const newCoverLetter = new CoverLetterModel({
  //     coverLetterText: coverLetterText,
  //   });
  //   const savedCoverLetter = await newCoverLetter.save();
  //   res.send(savedCoverLetter);
  //   // res.status(201).json(savedCoverLetter);
  // } catch (error) {
  //   console.error("Error creating cover letter!", error);
  //   res.status(500).json({ message: "Internal server error" });
  // }
});

router.put("/updateCoverLetter", async (req, res) => {
  putRequest(req, res, CoverLetterModel);
  // try {
  //   const body = req.body;
  //   const id = req.query.id || req.params.id;
  //   console.log("ID:", id);

  //   const { coverLetterText } = body;
  //   console.log("Cover Letter Text:", coverLetterText);
  //   const updateCoverLetter = await CoverLetterModel.findByIdAndUpdate(
  //     id,
  //     { coverLetterText: coverLetterText },
  //     { new: true }
  //   );
  //   if (!updateCoverLetter) {
  //     return res.status(404).json({ message: "Cover letter not found" });
  //   }
  //   console.log("Updated Cover Letter:", updateCoverLetter);

  //   res.send(updateCoverLetter);
  //   // res.status(200).json(updateCoverLetter);
  // } catch (error) {
  //   console.error("Error updating cover letter!", error);
  //   res.status(500).json({ message: "Internal server error" });
  // }
});

router.delete("/deleteCoverLetter", async (req, res) => {
  deleteRequest(req, res, CoverLetterModel);
  // try {
  //   const id = req.query.id || req.params.id;
  //   console.log("ID:", id);

  //   const deleteCoverLetter = await CoverLetterModel.findByIdAndDelete(id, {
  //     new: true,
  //   });
  //   if (!deleteCoverLetter) {
  //     return res.status(404).json({ message: "Cover letter not found" });
  //   }
  //   console.log("Deleted Cover Letter:", deleteCoverLetter);

  //   res.send("delete cover letter successfully!");
  // } catch (error) {
  //   console.error("Error to delete CoverLetter.", error);
  //   res.status(500).json({ message: "Internal server Error.!" });
  // }
});

module.exports = router;
