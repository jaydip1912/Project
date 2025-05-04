const express = require("express");
const app = express();
const port = 3001;
const cors = require("cors");
const morgan = require("morgan");
const { connectDB } = require("./config/db");
const userRouter = require("./routes/userRoutes");
const coverLetterRouter = require("./routes/coverLetter");
const customerRouter = require("./routes/customerRouter");
const inquiryRouter = require("./routes/enquiryRouter");
const inquiryDetailsRouter = require("./routes/inquiryDetailsRouter");
const lineItemRouter = require("./routes/lineItemRouter");
const productDetailsRouter = require("./routes/productDetailsRouter");
const salesPersonRouter = require("./routes/salesPersonRouter");

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan());

connectDB(); // Connect to MongoDB
app.use(express.json());

app.use("/", userRouter);
app.use("/", coverLetterRouter);
app.use("/", customerRouter);
app.use("/", inquiryRouter);
app.use("/", inquiryDetailsRouter);
app.use("/", lineItemRouter);
app.use("/", productDetailsRouter);
app.use("/", salesPersonRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
