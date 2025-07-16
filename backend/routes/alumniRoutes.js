const express = require('express');
const router = express.Router();

const {
  getAllAlumni,
  getAlumniById,
  getPendingAlumni,
  verifyAlumniById
} = require('../controllers/alumniController');

// ✅ Admin-only: Get all pending alumni
router.get('/pending', getPendingAlumni);       // 🔓 GET /api/alumni/pending

// ✅ Admin-only: Verify specific alumni
router.put('/verify/:id', verifyAlumniById);    // 🔓 PUT /api/alumni/verify/:id

// ✅ Individual profile must come BEFORE general list
router.get('/:id', getAlumniById);              // GET /api/alumni/:id
router.get('/', getAllAlumni);                  // GET /api/alumni

module.exports = router;
