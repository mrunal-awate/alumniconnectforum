// controllers/jobController.js
const Job = require('../models/Job');

exports.postJob = async (req, res) => {
  try {
    const user = req.user; // Populated by auth middleware

    // Only alumni can post jobs
    if (!user || user.role !== 'alumni') {
      return res.status(403).json({ message: 'Only alumni can post jobs' });
    }

    const { title, company, location, description, link } = req.body;

    // Basic validation (optional but recommended)
    if (!title || !company || !location || !description) {
      return res.status(400).json({ message: 'Please fill in all required fields' });
    }

    const newJob = new Job({
      title,
      company,
      location,
      description,
      link,
      postedBy: user._id || user.id // Handle either form
    });

    await newJob.save();

    res.status(201).json({
      message: '✅ Job posted successfully',
      job: newJob
    });
  } catch (error) {
    console.error('❌ Job posting error:', error);
    res.status(500).json({ message: 'Failed to post job' });
  }
};
