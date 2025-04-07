import jwt from "jsonwebtoken";
import user from "../models/user.model.js";
import dotenv from "dotenv";
dotenv.config();

const auth = async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ error: "No token, authorization denied" });
  }

  if (!process.env.JWT_SECRET_KEY) {
    console.error("JWT_SECRET_KEY is not set in the environment variables.");
    return res.status(500).json({ error: "Internal server error" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = await user.findById(decoded.userId).select("-password");

    if (!req.user) {
      return res.status(401).json({ error: "User not found" });
    }

    next();
  } catch (err) {
    console.error("Token validation failed:", err.message);
    res.status(401).json({ error: "Token is not valid" });
  }
};

export default auth;
