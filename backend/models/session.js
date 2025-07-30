const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
    videoUrl: { type: String, required: true },
    uploadedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    chatMessages: [
      {
        sender: String,
        message: String,
        timestamp: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Session', sessionSchema);
