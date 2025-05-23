const express = require("express");
const InquiryDetailsModel = require("../models/inquiryDetails");
const getRequest = require("../utils/getRequest");
const postRequest = require("../utils/postRequest");
const putRequest = require("../utils/putRequest");
const deleteRequest = require("../utils/deleteRequest");
const router = express.Router();

router.get("/inquiryDetails", async (req, res) => {
  getRequest(req, res, InquiryDetailsModel);
  // const InquiryDetailsFromDB = await InquiryDetailsModel.find({});
  // res.send(InquiryDetailsFromDB);
});

router.post("/createInquiryDetails", async (req, res) => {
  postRequest(req, res, InquiryDetailsModel);
  // try {
  //   const body = req.body;
  //   const {
  //     capacity,
  //     Span,
  //     Height_of_lift,
  //     Travel_Length,
  //     Area_Classification,
  //     Location,
  //     Ambient_Temp,
  //     Class,
  //     Power_Supply,
  //     Control_Voltage,
  //     Crane_Quantity,
  //     IS_Standard,
  //     Operation,
  //     Speeds_mpm,
  //     Main_Micro_HOIST,
  //     Main_Micro_C_T,
  //     Main_Micro_L_T,
  //     Hook_Type,
  //     Main_Micro,
  //     Motors,
  //     H_P__K_W,
  //     Motors_H_P__K_W_HOIST,
  //     Motors_H_P__K_W_C_T,
  //     Motors_H_P__K_W_L_T,
  //     Motors_Make_HOIST,
  //     Motors_Make_C_T,
  //     Motors_Make_L_T,
  //     Brake,
  //     Brake_Type_HOIST,
  //     Brake_Type_C_T,
  //     Brake_Type_L_T,
  //     Brake_Make_HOIST,
  //     Brake_Make_C_T,
  //     Brake_Make_L_T,
  //     Limit_Switch_Type_HOIST,
  //     Limit_Switch_Type_C_T,
  //     Limit_Switch_Type_L_T,
  //     Limit_Switch_Make_HOIST,
  //     Limit_Switch_Make_C_T,
  //     Limit_Switch_Make_L_T,
  //     Wheel_HOIST,
  //     Wheel_C_T,
  //     Wheel_L_T,
  //     Rail_Size_HOIST,
  //     Rail_Size_C_T,
  //     Rail_Size_L_T,
  //     Type_of_Motion,
  //     No_of_falls,
  //     Wire_Rope_Size_Const,
  //     Hook,
  //     C_T_Power_Feeding,
  //     L_T_Power_Feeding,
  //     Buffer,
  //     Platform,
  //     Painting,
  //     Hooter,
  //     Anti_Collision,
  //     Bridge_Light,
  //     Dsl_Maintenance_Cage,
  //     Load_cell,
  //     Jacking_Pad,
  //     Crane_Weight,
  //     Wheel_Load,
  //     Brake_QTY_HOIST,
  //     Brake_QTY_C_T,
  //     Brake_QTY_L_T,
  //     Limit_Switch_QTY_HOIST,
  //     Limit_Switch_QTY_C_T,
  //     Limit_Switch_QTY_L_T,
  //     Wheel_QTY_HOIST,
  //     Wheel_QTY_C_T,
  //     Wheel_QTY_L_T,
  //     Motors_QTY_L_T,
  //     Motors_QTY_C_T,
  //     Motors_QTY_HOIST,
  //   } = body;

  //   const newInquiryDetails = new InquiryDetailsModel({
  //     capacity: capacity,
  //     Span: Span,
  //     Height_of_lift: Height_of_lift,
  //     Travel_Length: Travel_Length,
  //     Area_Classification: Area_Classification,
  //     Location: Location,
  //     Ambient_Temp: Ambient_Temp,
  //     Class: Class,
  //     Power_Supply: Power_Supply,
  //     Control_Voltage: Control_Voltage,
  //     Crane_Quantity: Crane_Quantity,
  //     IS_Standard: IS_Standard,
  //     Operation: Operation,
  //     Speeds_mpm: Speeds_mpm,
  //     Main_Micro_HOIST: Main_Micro_HOIST,
  //     Main_Micro_C_T: Main_Micro_C_T,
  //     Main_Micro_L_T: Main_Micro_L_T,
  //     Hook_Type: Hook_Type,
  //     Main_Micro: Main_Micro,
  //     Motors: Motors,
  //     H_P__K_W: H_P__K_W,
  //     Motors_H_P__K_W_HOIST: Motors_H_P__K_W_HOIST,
  //     Motors_H_P__K_W_C_T: Motors_H_P__K_W_C_T,
  //     Motors_H_P__K_W_L_T: Motors_H_P__K_W_L_T,
  //     Motors_Make_HOIST: Motors_Make_HOIST,
  //     Motors_Make_C_T: Motors_Make_C_T,
  //     Motors_Make_L_T: Motors_Make_L_T,
  //     Brake: Brake,
  //     Brake_Type_HOIST: Brake_Type_HOIST,
  //     Brake_Type_C_T: Brake_Type_C_T,
  //     Brake_Type_L_T: Brake_Type_L_T,
  //     Brake_Make_HOIST: Brake_Make_HOIST,
  //     Brake_Make_C_T: Brake_Make_C_T,
  //     Brake_Make_L_T: Brake_Make_L_T,
  //     Limit_Switch_Type_HOIST: Limit_Switch_Type_HOIST,
  //     Limit_Switch_Type_C_T: Limit_Switch_Type_C_T,
  //     Limit_Switch_Type_L_T: Limit_Switch_Type_L_T,
  //     Limit_Switch_Make_HOIST: Limit_Switch_Make_HOIST,
  //     Limit_Switch_Make_C_T: Limit_Switch_Make_C_T,
  //     Limit_Switch_Make_L_T: Limit_Switch_Make_L_T,
  //     Wheel_HOIST: Wheel_HOIST,
  //     Wheel_C_T: Wheel_C_T,
  //     Wheel_L_T: Wheel_L_T,
  //     Rail_Size_HOIST: Rail_Size_HOIST,
  //     Rail_Size_C_T: Rail_Size_C_T,
  //     Rail_Size_L_T: Rail_Size_L_T,
  //     Type_of_Motion: Type_of_Motion,
  //     No_of_falls: No_of_falls,
  //     Wire_Rope_Size_Const: Wire_Rope_Size_Const,
  //     Hook: Hook,
  //     C_T_Power_Feeding: C_T_Power_Feeding,
  //     L_T_Power_Feeding: L_T_Power_Feeding,
  //     Buffer: Buffer,
  //     Platform: Platform,
  //     Painting: Painting,
  //     Hooter: Hooter,
  //     Anti_Collision: Anti_Collision,
  //     Bridge_Light: Bridge_Light,
  //     Dsl_Maintenance_Cage: Dsl_Maintenance_Cage,
  //     Load_cell: Load_cell,
  //     Jacking_Pad: Jacking_Pad,
  //     Crane_Weight: Crane_Weight,
  //     Wheel_Load: Wheel_Load,
  //     Brake_QTY_HOIST: Brake_QTY_HOIST,
  //     Brake_QTY_C_T: Brake_QTY_C_T,
  //     Brake_QTY_L_T: Brake_QTY_L_T,
  //     Limit_Switch_QTY_HOIST: Limit_Switch_QTY_HOIST,
  //     Limit_Switch_QTY_C_T: Limit_Switch_QTY_C_T,
  //     Limit_Switch_QTY_L_T: Limit_Switch_QTY_L_T,
  //     Wheel_QTY_HOIST: Wheel_QTY_HOIST,
  //     Wheel_QTY_C_T: Wheel_QTY_C_T,
  //     Wheel_QTY_L_T: Wheel_QTY_L_T,
  //     Motors_QTY_L_T: Motors_QTY_L_T,
  //     Motors_QTY_C_T: Motors_QTY_C_T,
  //     Motors_QTY_HOIST: Motors_QTY_HOIST,
  //   });

  //   const savedInquiryDetails = await newInquiryDetails.save();
  //   res.send(savedInquiryDetails);
  // } catch (error) {
  //   console.error("Error to Create inquiryDetails!", error);
  //   res.status(500).json({ message: "Internal server error" });
  // }
});

router.put("/updateInquiryDetails", async (req, res) => {
  putRequest(req, res, InquiryDetailsModel);
});

router.delete("/deleteInquiryDetails", async (req, res) => {
  deleteRequest(req, res, InquiryDetailsModel);
});
module.exports = router;
