const express = require("express");
const app = express();
const port = 3001;
const cors = require("cors");
const morgan = require("morgan");
const { connectDB } = require("./config/db");
const userRouter = require("./routes/usersRoutes");
const coverLetterRouter = require("./routes/coverLettersRouter");
const customerRouter = require("./routes/customersRouter");
const inquiryRouter = require("./routes/inquirysRouter");
const inquiryDetailsRouter = require("./routes/inquiryDetailsRouter");
const lineItemRouter = require("./routes/lineItemsRouter");
const productDetailsRouter = require("./routes/productDetailsRouter");
const salesPersonRouter = require("./routes/salesPersonsRouter");
const rolesRouter = require("./routes/rolesRouter");

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
app.use("/", rolesRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
