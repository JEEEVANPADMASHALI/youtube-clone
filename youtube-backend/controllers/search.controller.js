import Video from "../models/video.model.js";

// Search videos by title or category
export const searchVideo = async (req, res) => {
  const searchQuery = req.query.q;

  if (!searchQuery || searchQuery.trim() === "") {
    return res.status(400).json({ message: "Search query is required" });
  }

  try {
    const videos = await Video.find({
      $or: [
        { title: { $regex: searchQuery, $options: "i" } },
        { category: { $regex: searchQuery, $options: "i" } },
      ],
    })
      .populate("user", "channelName profilePic userName createdAt")
      .sort({ createdAt: -1 })  // Optional
      .limit(20);               // Optional for performance

    res.status(200).json({ videos });
  } catch (error) {
    res.status(500).json({ message: "Error searching videos", error });
  }
};
