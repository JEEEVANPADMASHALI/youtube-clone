import mongoose from "mongoose";

// schema for user model 
const userSchema = new mongoose.Schema(
  {
    channelName: {
      type: String,
      required: true,
      trim: true,
    },
    userName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      index: true,
    },
    password: {
      type: String,
      required: true,
      select: false, // secure by default
    },
    about: {
      type: String,
      required: true,
      trim: true,
    },
    profilePic: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

const user = mongoose.model("user", userSchema);
export default user;
