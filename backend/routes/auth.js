const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();
const SECRET = process.env.JWT_SECRET || 'fallback_secret_key';

// ✅ POST /api/auth/register
router.post('/register', async (req, res) => {
  try {
    const { email, password, role = 'student' } = req.body;

    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ message: 'User already exists' });

    const hash = await bcrypt.hash(password, 10);
    const verified = role === 'student'; // auto-verify students, not alumni

    const user = new User({ email, password: hash, role, verified: false });    //  Verified: true for Auto verification
    await user.save();

    res.status(201).json({
      message: verified
        ? 'Registration successful. You can now log in.'
        : 'Alumni registration submitted. Awaiting admin approval.'
    });
  } catch (err) {
    res.status(400).json({ message: err.message || 'Registration failed' });
  }
});

// ✅ POST /api/auth/login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid email or password' });

    if (!user.verified) return res.status(403).json({ message: 'Account not verified yet' });

    const token = jwt.sign(
      { id: user._id, email: user.email, role: user.role },
      SECRET,
      { expiresIn: '2h' }
    );

    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: 'Login failed' });
  }
});

module.exports = router;
