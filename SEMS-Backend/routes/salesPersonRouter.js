const express = require("express");
const SalesPersonModel = require("../models/salesPerson");
const router = express.Router();

router.get("/salesPerson", async (req, res) => {
  const salesPersonFromDB = await SalesPersonModel.find({});
  res.send(salesPersonFromDB);
});

router.post("/createSalesPerson", async (req, res) => {
  const body = req.body;
  const {
    email,
    first_name,
    //   id,
    last_name,
    password,
    phone_number,
    status,
  } = body;

  const newSalesPerson = new SalesPersonModel({
    email: email,
    first_name: first_name,
    //   id:id,
    last_name: last_name,
    password: password,
    phone_number: phone_number,
    status: status,
  });

  const savedSalesPerson = await newSalesPerson.save();
  res.send(savedSalesPerson);
});
module.exports = router;
