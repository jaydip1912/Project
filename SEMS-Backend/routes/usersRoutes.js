const express = require("express");
const UserModel = require("../models/users");
const router = express.Router();

router.get("/user", async (req, res) => {
  const userFromDB = await UserModel.find({});
  //   res.status(200).json(userFromDB);
  res.send(userFromDB);
});

router.post("/createUser", async (req, res) => {
  try {
    const body = req.body;
    const { password, first_name, last_name, phone_number, email } = body;
    const newUser = new UserModel({
      password: password,
      first_name: first_name,
      last_name: last_name,
      phone_number: phone_number,
      email: email,
    });
    const savedUser = await newUser.save();
    res.send(savedUser);
    // res.status(201).json(savedUser);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
