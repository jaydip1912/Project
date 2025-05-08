const express = require("express");
const AuthModel = require("../models/auth");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const saltRounds = 10;
const jwtSecret = "jwbsecretkey";

// const t = jwt.sign({ id: 123456789 }, jwtSecret, { expiresIn: "120s" });
// console.log("token:", t);

router.get("/login", async (req, res) => {
  try {
    // const getToken = req.headers["authorization"];
    // if (!getToken) {
    //   return res.status(401).json({ message: "No token provided" });
    // }
    // const token = getToken.split(" ")[1];
    // console.log("token:", token);

    // const decoded = jwt.verify(token, jwtSecret);

    const authFromDB = await AuthModel.find({});
    res.send(authFromDB);
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      return res.status(401).json({ message: "Token expired" });
    }
    console.error("Error fetching user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
 
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
