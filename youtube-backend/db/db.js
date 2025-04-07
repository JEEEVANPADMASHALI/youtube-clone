import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
  const mongoDB_URI = process.env.MONGODB_URI;

  if (!mongoDB_URI) {
    console.error("❌ MONGODB_URI is not defined in the environment variables.");
    process.exit(1);
  }

  try {
    await mongoose.connect(mongoDB_URI);
    console.log(" Database connected successfully!");
  } catch (err) {
    console.error(" Database connection failed:", err);
    process.exit(1); // Exit the app on DB failure
  }
};

export default connectDB;
