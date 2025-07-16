const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const SECRET = process.env.JWT_SECRET || 'supersecretkey123';

// 🔒 Middleware to check token
const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Access Denied. No token provided.' });

  try {
    const decoded = jwt.verify(token, SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(400).json({ error: 'Invalid token' });
  }
};

// 🔍 Get current user's profile (excluding password)
router.get('/me', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.error('Fetch profile error:', err);
    res.status(500).json({ error: 'Failed to fetch profile' });
  }
});

// 🔃 Update alumni profile
router.put('/update', authMiddleware, async (req, res) => {
  if (req.user.role !== 'alumni') {
    return res.status(403).json({ error: 'Only alumni can update profile' });
  }

  const allowedFields = [
    'fullName',
    'phone',
    'yearOfPassing',
    'company',
    'designation',
    'location',
    'linkedIn',
    'imageUrl' // ✅ Save image URL if provided
  ];

  const updates = {};
  allowedFields.forEach((field) => {
    if (req.body[field]) updates[field] = req.body[field];
  });

  try {
    await User.findByIdAndUpdate(req.user.id, updates);
    const updatedUser = await User.findById(req.user.id).select('-password');
    res.json({ message: 'Profile updated successfully', user: updatedUser });
  } catch (err) {
    console.error('Update profile error:', err);
    res.status(500).json({ error: 'Failed to update profile' });
  }
});

module.exports = router;
