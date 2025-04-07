import Video from "../models/video.model.js";

// Upload video
export const uploadVideo = async (req, res) => {
  try {
    const { title, description, videoLink, category, thumbnail } = req.body;

    const videoUpload = new Video({
      user: req.user._id,
      title,
      description,
      videoLink,
      category,
      thumbnail,
    });

    await videoUpload.save();

    res.status(201).json({ success: true, video: videoUpload });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// Get all videos
export const getAllVideo = async (req, res) => {
  try {
    const videos = await Video.find().populate(
      "user",
      "channelName profilePic userName createdAt"
    );

    res.status(200).json({ success: true, videos });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// Get video by ID
export const getVideoById = async (req, res) => {
  try {
    const { id } = req.params;
    const video = await Video.findById(id).populate(
      "user",
      "channelName profilePic userName createdAt"
    );

    if (!video) {
      return res.status(404).json({ success: false, message: "Video not found" });
    }

    res.status(200).json({ success: true, video });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// Get all videos by user ID
export const getAllVideoByUserID = async (req, res) => {
  try {
    const { userId } = req.params;
    const videos = await Video.find({ user: userId }).populate(
      "user",
      "channelName profilePic userName createdAt about"
    );

    res.status(200).json({ success: true, videos });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
