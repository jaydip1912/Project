const express = require("express");
const UserModel = require("../models/users");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const saltRounds = 10;

const jwtSecret = "jwbsecretkey";

const token = jwt.sign({ id: 1234567890 }, jwtSecret, { expiresIn: "120s" });
console.log("token:", token);

router.get("/user", async (req, res) => {
  try {
    const getToken = req.headers["authorization"];
    if (!getToken) {
      return res.status(401).json({ message: "No token provided" });
    }
    const token = getToken.split(" ")[1];
    console.log("token:", token);
    console.log("jwtSecret:", jwtSecret);

    const decoded = jwt.verify(token, jwtSecret);
    const userId = decoded.id;
    // console.log("decoded:", decoded);
    if (!decoded) {
      return res.status(401).json({ message: "Invalid token" });
    }
    const user = await UserModel.findById(decoded.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    console.error(error);
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Token expired" });
    }
    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({ message: "Invalid token" });
    }
    console.error("Error fetching user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

//     const usersFromDB = await UserModel.find({});
//     res.send(usersFromDB);
//   } catch (error) {
//     if (error.name === "TokenExpiredError") {
//       return res.status(401).json({ message: "Token expired" });
//     }
//     console.error("Error fetching user:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// });

router.post("/createUser", async (req, res) => {
  try {
    const body = req.body;
    const getToken = req.headers["authorization"];
    if (!getToken) {
      return res.status(401).json({ message: "No token provided" });
    }
    const token = getToken.split(" ")[1];
    const decoded = jwt.verify(token, jwtSecret);
    console.log("decoded:", decoded);
    if (!decoded) {
      return res.status(401).json({ message: "Invalid token" });
    }
    const { password, first_name, last_name, phone_number, email } = body;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const user = await UserModel.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    const newUser = new UserModel({
      password: hashedPassword,
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

router.delete("/deleteUser/", async (req, res) => {
  try {
    const id = req.params.id;
    const getToken = req.headers["authorization"];
    if (!getToken) {
      return res.status(401).json({ message: "No token provided" });
    }
    const token = getToken.split(" ")[1];
    const decoded = jwt.verify(token, jwtSecret);
    console.log("decoded:", decoded);
    if (!decoded) {
      return res.status(401).json({ message: "Invalid token" });
    }
    const deleteUser = await UserModel.deleteOne({
      id: id,
    });

    if (!deleteUser) {
      return res.status(404).json({ message: "User not found" });
    }
    if (deleteUser.deletedCount === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});
module.exports = router;
