const express = require("express");
const AuthModel = require("../models/auth");
const router = express.Router();

router.get("/login", async (req, res) => {
  //   const getToken = req.headers["authorization"];
  //   const token = getToken.split(" ")[1];
  //   console.log("token:", token);
  const loginUser = await AuthModel.find({});
  res.send(loginUser);
});

router.post("/createLogin", async (req, res) => {
  const { email, password, role } = req.body;
  const user = new AuthModel({ email, password, role });
  try {
    const savedUser = await user.save();
    res.status(201).json(savedUser);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});
module.exports = router;
