import mongoose from "mongoose";

const demoRequestSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    companyName: {
      type: String,
      required: true,
      trim: true,
    },
    companySize: {
      type: String,
      default: "50 - 250",
    },
    primaryFocus: {
      type: String,
      default: "Operations Orchestration",
    },
  },
  { timestamps: true },
);

export default mongoose.model("DemoRequest", demoRequestSchema);