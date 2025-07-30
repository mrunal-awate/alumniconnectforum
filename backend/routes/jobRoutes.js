// routes/jobRoutes.js

const express = require('express');
const router = express.Router();
const { postJob } = require('../controllers/jobController');
const { protect } = require('../middleware/auth');
const Job = require('../models/Job'); // ⬅️ You need this for the GET route

// ✅ POST a new job (protected)
router.post('/', protect, postJob);

// ✅ GET all jobs (temporary for testing or frontend)
router.get('/', async (req, res) => {
  try {
    const jobs = await Job.find().populate('postedBy', 'name email');
    res.json(jobs);
  } catch (err) {
    console.error('Error fetching jobs:', err);
    res.status(500).json({ message: 'Failed to fetch jobs' });
  }
});

module.exports = router;
