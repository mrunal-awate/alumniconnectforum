// routes/chatRoutes.js
const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');
const { getChatMessages, postChatMessage } = require('../controllers/chatController');

// GET all chat messages for a session
router.get('/:sessionId', protect, getChatMessages);

// POST a new chat message for a session
router.post('/:sessionId', protect, postChatMessage);

module.exports = router;
