// routes/adminRoutes.js
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const SECRET = process.env.JWT_SECRET || 'supersecretkey123';

// 🔒 Middleware: check if logged in + is admin
const adminAuth = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Access Denied. No token provided.' });

  try {
    const decoded = jwt.verify(token, SECRET);
    if (decoded.role !== 'admin') {
      return res.status(403).json({ error: 'Only admins allowed.' });
    }
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(400).json({ error: 'Invalid token.' });
  }
};

// GET all pending alumni (verified: false)
router.get('/pending-alumni', adminAuth, async (req, res) => {
  try {
    const pending = await User.find({ role: 'alumni', verified: false }).select(
      'fullName email yearOfPassing company designation location linkedIn imageUrl'
    );
    res.json(pending);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch pending alumni.' });
  }
});

// PUT /verify/:id → approve an alumni
router.put('/verify/:id', adminAuth, async (req, res) => {
  try {
    const updated = await User.findByIdAndUpdate(
      req.params.id,
      { verified: true },
      { new: true }
    );
    res.json({ message: 'Alumni verified successfully.', user: updated });
  } catch (err) {
    res.status(500).json({ error: 'Failed to verify alumni.' });
  }
});

module.exports = router;
