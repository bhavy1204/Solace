const mongoose = require("mongoose");

const entrySchema = new mongoose.Schema({
  journalId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Journal",
    required: true,
  },
  responses: [String],
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model("Entry", entrySchema);
