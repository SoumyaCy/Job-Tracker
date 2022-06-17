const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, "please provide your name"],
    },
    position: {
      type: String,
      required: [true, "please provide your name"],
      maxlength: 100,
    },
    status: {
      type: String,
      enum: ["pending", "interview", "declined"],
      default: "pending",
    },
    jobType: {
      type: String,
      enum: ["part-time", "full-time", "internship", "trainee"],
      default: "full-time",
    },
    jobLocation: {
      type: String,
      required: [true, "Please provide your job location"],
      default: "my city",
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      required: [true, "Please provide the user"],
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Jobs", JobSchema);
