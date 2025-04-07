import mongoose from "mongoose";

const videoSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    videoLink: {
      type: String,
      required: true,
      trim: true,
    },
    thumbnail: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      default: "All",
      trim: true,
    },
    like: {
      type: Number,
      default: 0,
      min: 0,
    },
    dislike: {
      type: Number,
      default: 0,
      min: 0,
    },
    tags: [String],
    views: {
      type: Number,
      default: 0,
      min: 0,
    },
  },
  { timestamps: true }
);

const video = mongoose.model("video", videoSchema);

export default video;
// Compare this snippet from youtube-backend/controllers/user.controller.js: