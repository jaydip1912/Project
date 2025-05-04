const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // Replace 'your_mongo_uri' with your actual MongoDB connection string
    const mongoURI =
      process.env.MONGO_URI || "mongodb://localhost:27017/sales_enquiry_db";

    await mongoose.connect(mongoURI);

    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1); // Exit the process with failure
  }
};

module.exports = { connectDB };
