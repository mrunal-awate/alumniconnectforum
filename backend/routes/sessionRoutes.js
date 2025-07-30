// routes/sessionRoutes.js
const express = require('express');
const router = express.Router();
const Session = require('../models/session');
const upload = require('../middleware/upload');

// POST /api/sessions - Create new session with video upload
router.post('/', upload.single('video'), async (req, res) => {
  try {
    const { title, description, speaker } = req.body;

    // Check if video file is uploaded
    if (!req.file) {
      return res.status(400).json({ message: 'Video file is required' });
    }

    const videoUrl = `/uploads/${req.file.filename}`;

    const newSession = new Session({
      title,
      description,
      speaker,
      videoUrl,
      date: new Date(), // Add current timestamp
    });

    await newSession.save();
    res.status(201).json(newSession);
  } catch (err) {
    console.error('Session Upload Error:', err);
    res.status(500).json({ message: 'Failed to upload session' });
  }
});

// GET /api/sessions - Fetch all sessions
router.get('/', async (req, res) => {
  try {
    const sessions = await Session.find().sort({ date: -1 });
    res.json(sessions);
  } catch (err) {
    console.error('Fetch Sessions Error:', err);
    res.status(500).json({ message: 'Error fetching sessions' });
  }
});

module.exports = router;
