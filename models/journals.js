const mongoose = require("mongoose");

const journalSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ["success", "love", "addiction", "general"],
    required: true,
  },
  questions: [String],  // List of questions/prompts
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model("Journal", journalSchema);
