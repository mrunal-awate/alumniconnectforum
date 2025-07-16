const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['student', 'alumni'], required: true },
  verified: { type: Boolean, default: false },

  // 🧾 Alumni Profile Fields
  fullName: { type: String },
  phone: { type: String },
  yearOfPassing: { type: Number },
  company: { type: String },
  designation: { type: String },
  location: { type: String },
  linkedIn: { type: String },

  // 🖼️ Add this field to store image URL
  imageUrl: { type: String }
});

module.exports = mongoose.model('User', userSchema);
