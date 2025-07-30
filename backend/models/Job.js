// models/Job.js
const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  company: { type: String, required: true },
  location: String,
  description: String,
  link: String,
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Make sure you have a User model
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Job', jobSchema);
