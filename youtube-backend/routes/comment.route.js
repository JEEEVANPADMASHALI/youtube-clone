import { Router } from "express";
import {
  addComment,
  getCommentByVideoId,
  // deleteComment (optional)
} from "../controllers/comment.controller.js";
import auth from "../middlewares/authentication.js";

const router = Router();

// Routes
router.post("/comments", auth, addComment);             // Add a comment
router.get("/comments/:videoId", getCommentByVideoId);  // Get comments for a video
// router.delete("/comments/:commentId", auth, deleteComment); // Optional delete route

export default router;
