import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "Lax",
};

// SIGN UP
export const signUp = async (req, res) => {
  try {
    const { channelName, userName, about, profilePic, password } = req.body;

    const isExist = await User.findOne({ userName });
    if (isExist) {
      return res.status(400).json({ error: "Username already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      channelName,
      userName,
      about,
      profilePic,
      password: hashedPassword,
    });

    await newUser.save();

    // Don't send password back
    const { password: _, ...userData } = newUser._doc;

    res.status(201).json({
      message: "User registered successfully",
      success: true,
      data: userData,
    });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// SIGN IN
export const signIn = async (req, res) => {
  try {
    const { userName, password } = req.body;

    const getUser = await User.findOne({ userName });
    if (!getUser) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, getUser.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign(
      { userId: getUser._id },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "7d" }
    );

    res.cookie("token", token, cookieOptions);

    const { password: _, ...userData } = getUser._doc;

    res.status(200).json({
      message: "Logged in successfully",
      success: true,
      token,
      user: userData,
    });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// LOGOUT
export const logout = async (req, res) => {
  res.clearCookie("token", cookieOptions).json({
    message: "Logged out successfully",
    success: true,
  });
};

