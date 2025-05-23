import * as yup from "yup";

export const step1ValidationSchema = yup.object().shape({
  // inquiryNo: yup.number().required('Inquiry No is required'),
});

export const step2ValidationSchema = yup.object().shape({
  product_id: yup.string().required("Product is required"),
  capacity: yup.string().required("Capacity is required"),
  Span: yup.string().required("Span is required"),
  Height_of_lift: yup.string().required("Height of Lift is required"),
  Travel_Length: yup.string().required("Travel Length is required"),
  Area_Classification: yup.string().required("Area Classification is required"),
  Location: yup.string().required("Location is required"),
  Ambient_Temp: yup.string().required("Ambient is required"),
  Class: yup.string().required("Class is required"),
  Power_Supply: yup.string().required("Power Supply is required"),
  Control_Voltage: yup.string().required("Control Voltage is required"),
  Crane_Quantity: yup.string().required("Crane Quantity is required"),
  IS_Standard: yup.string().required("IS Standard is required"),
  Operation: yup.string().required("Operation is required"),

  //   Speed_mpm: yup.string().required("Product is required"),
  Main_Micro_HOIST: yup.string().required("Product is required"),
  Main_Micro_C_T: yup.string().required("Product is required"),
  Main_Micro_L_T: yup.string().required("Product is required"),
  //   Main_Micro: yup.string().required("Product is required"),

  Motors: yup.string().required("Motor is required"),
  //   H_P__K_W: yup.string().required("Product is required"),

  Motors_H_P__K_W_HOIST: yup.string().required("Product is required"),
  Motors_H_P__K_W_C_T: yup.string().required("HP/KW C_T  is required"),
  Motors_H_P__K_W_L_T: yup.string().required("HP/KW L_T is required"),
  Motors_Make_HOIST: yup.string().required("Motors Make HOIST is required"),
  Motors_QTY_C_T: yup.string().required("Motors_QTY_C_T is required"),
  Motors_QTY_L_T: yup.string().required("Motors_QTY_L_T is required"),
  Brake: yup.string().required("Brake is required"),

  Brake_Type_HOIST: yup.string().required("Field is required"),
  Brake_Type_C_T: yup.string().required("Field is required"),
  Brake_Type_L_T: yup.string().required("Field is required"),
  Brake_Make_HOIST: yup.string().required("Field is required"),
  Brake_Make_C_T: yup.string().required("Field is required"),
  Brake_Make_L_T: yup.string().required("Field is required"),
  Brake_QTY_HOIST: yup.string().required("Field is required"),
  Brake_QTY_C_T: yup.string().required("Field is required"),
  Brake_QTY_L_T: yup.string().required("Field is required"),
  Limit_Switch_Type_HOIST: yup.string().required("Field is required"),
  Limit_Switch_Type_C_T: yup.string().required("Field is required"),
  Limit_Switch_Type_L_T: yup.string().required("Field is required"),
  Limit_Switch_Make_HOIST: yup.string().required("Field is required"),
  Limit_Switch_Make_C_T: yup.string().required("Field is required"),
  Limit_Switch_Make_L_T: yup.string().required("Field is required"),
  Limit_Switch_QTY_HOIST: yup.string().required("Field is required"),
  Limit_Switch_QTY_C_T: yup.string().required("Field is required"),
  Limit_Switch_QTY_L_T: yup.string().required("Field is required"),
  Wheel_HOIST: yup.string().required("Field is required"),
  Wheel_C_T: yup.string().required("Field is required"),
  Wheel_L_T: yup.string().required("Field is required"),
  Wheel_QTY_HOIST: yup.string().required("Field is required"),
  Wheel_QTY_C_T: yup.string().required("Field is required"),
  Wheel_QTY_L_T: yup.string().required("Field is required"),
  Rail_Size_HOIST: yup.string().required("Field is required"),
  Rail_Size_C_T: yup.string().required("Field is required"),
  Rail_Size_L_T: yup.string().required("Field is required"),
  Type_of_Motion: yup.string().required("Field is required"),
  No_of_falls: yup.string().required("Field is required"),
  Wire_Rope_Size_Const: yup.string().required("Field is required"),
  Hook_Type: yup.string().required("Field is required"),
  Hook: yup.string().required("Field is required"),
  C_T_Power_Feeding: yup.string().required("Field is required"),
  L_T_Power_Feeding: yup.string().required("Field is required"),
  Buffer: yup.string().required("Field is required"),
  Platform: yup.string().required("Field is required"),
  Painting: yup.string().required("Field is required"),
  Hooter: yup.string().required("Field is required"),
  Anti_Collision: yup.string().required("Field is required"),
  Bridge_Light: yup.string().required("Field is required"),
  Dsl_Maintenance_Cage: yup.string().required("Field is required"),
  Load_cell: yup.string().required("Field is required"),
  Jacking_Pad: yup.string().required("Field is required"),
  Crane_Weight: yup.number().required("Field is required"),
  Wheel_Load: yup.number().required("Field is required"),

  // Motors_Make: yup.string().required('Field is required'),
  // Motors_QTY: yup.string().required('Field is required'),
  // Brake_Type: yup.string().required('Field is required'),
  // Brake_Make: yup.string().required('Field is required'),
  // Brake_QTY: yup.string().required('Field is required'),
  // Limit_Switch: yup.string().required('Field is required'),
  // Limit_Switch_Type: yup.string().required('Field is required'),
  // Limit_Switch_Make: yup.string().required('Field is required'),
  // Limit_Switch_QTY: yup.string().required('Field is required'),
  // Wheel: yup.string().required('Field is required'),
  // Wheel_QTY: yup.string().required('Field is required'),
  // Rail_Size: yup.string().required('Field is required'),
});
