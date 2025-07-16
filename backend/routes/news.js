const express = require('express');
const axios = require('axios');

const router = express.Router();

router.get('/job-news', async (req, res) => {
  try {
    const response = await axios.get('https://remotive.io/api/remote-jobs', {
      params: { search: 'fresher internship junior' }
    });

    const jobs = response.data.jobs || [];
    res.json(jobs.slice(0, 20)); // return top 20 jobs
  } catch (error) {
    console.error('❌ Failed to fetch jobs:', error.message);
    res.status(500).json({ message: 'Failed to fetch job listings' });
  }
});

module.exports = router;
