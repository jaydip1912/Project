const express = require("express");
const RoleModel = require("../models/roles");
const router = express.Router();

router.get("/roles", async (req, res) => {
  const RolesFromDB = await RoleModel.find({});
  res.send(RolesFromDB);
});

router.post("/createRoles", async (req, res) => {
  try {
    const body = req.body;
    const { roleName } = body;
    const newRoles = new RoleModel({
      roleName: roleName,
    });
    const savedRoles = await newRoles.save();
    res.send(savedRoles);
  } catch (error) {
    console.error("Error creating role:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
