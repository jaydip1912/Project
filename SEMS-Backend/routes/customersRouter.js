const mongoose = require("mongoose");
const express = require("express");
const CustomerModel = require("../models/customers");
const getRequest = require("../utils/getRequest");
const postRequest = require("../utils/postRequest");
const putRequest = require("../utils/putRequest");
const deleteRequest = require("../utils/deleteRequest");
const router = express.Router();

router.get("/customer", async (req, res) => {
  getRequest(req, res, CustomerModel);
  // const userFromDB = await CustomerModel.find({});
  // res.send(userFromDB);
});

router.post("/createCustomer", async (req, res) => {
  postRequest(req, res, CustomerModel);
  // try {
  //   const body = req.body;
  //   const { first_name, last_name, phone_number, email, address } = body;
  //   const newCustomer = new CustomerModel({
  //     first_name: first_name,
  //     last_name: last_name,
  //     phone_number: phone_number,
  //     email: email,
  //     address: address,
  //   });
  //   const savedCustomer = await newCustomer.save();
  //   res.send(savedCustomer);
  //   // res.status(201).json(savedCustomer);
  // } catch (error) {
  //   console.error("Error creating customer:", error);
  //   res.status(500).json({ message: "Internal server error" });
  // }
});

router.put("/updateCustomer", async (req, res) => {
  putRequest(req, res, CustomerModel);
});

router.delete("/deleteCustomer", async (req, res) => {
  deleteRequest(req, res, CustomerModel);
});
module.exports = router;
