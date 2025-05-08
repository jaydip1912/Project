const express = require("express");
const app = express();
const port = 3001;
const cors = require("cors");
const morgan = require("morgan");
const { connectDB } = require("./config/db");
const authRouter = require("./routes/authRouter");
const userRouter = require("./routes/usersRoutes");
const coverLetterRouter = require("./routes/coverLettersRouter");
const customerRouter = require("./routes/customersRouter");
const inquiryRouter = require("./routes/inquirysRouter");
const inquiryDetailsRouter = require("./routes/inquiryDetailsRouter");
const lineItemRouter = require("./routes/lineItemsRouter");
const productDetailsRouter = require("./routes/productDetailsRouter");
const salesPersonRouter = require("./routes/salesPersonsRouter");
const rolesRouter = require("./routes/rolesRouter");
const auth = require("./auth");

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan());

connectDB(); // Connect to MongoDB
app.use(express.json());

app.use("/", auth, authRouter);
app.use("/", auth, userRouter);
app.use("/", auth, coverLetterRouter);
app.use("/", auth, customerRouter);
app.use("/", auth, inquiryRouter);
app.use("/", auth, inquiryDetailsRouter);
app.use("/", auth, lineItemRouter);
app.use("/", auth, productDetailsRouter);
app.use("/", auth, salesPersonRouter);
app.use("/", auth, rolesRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`server is running on Port ${port}`);
});
