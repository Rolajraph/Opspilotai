import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "../models/User.js";

dotenv.config();

async function createUser() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");

    const existing = await User.findOne({ email: "sarah.c@enterprise.com" });
    if (existing) {
      console.log("User already exists with this email.");
      process.exit(0);
    }

    const user = await User.create({
      name: "Sarah Connor",
      email: "sarah.c@enterprise.com",
      password: "TestPassword123",
      role: "admin",
    });

    console.log("User created successfully:", {
      id: user._id,
      name: user.name,
      email: user.email,
    });
    process.exit(0);
  } catch (error) {
    console.error("Error creating user:", error.message);
    process.exit(1);
  }
}

createUser();