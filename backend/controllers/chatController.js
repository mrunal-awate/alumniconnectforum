// controllers/chatController.js
const Chat = require('../models/Chat');

// GET chat messages for a specific session
exports.getChatMessages = async (req, res) => {
  try {
    const messages = await Chat.find({ sessionId: req.params.sessionId }).sort({ createdAt: 1 });
    res.json(messages);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching chat messages' });
  }
};

// POST a new chat message
exports.postChatMessage = async (req, res) => {
  try {
    const newMessage = new Chat({
      sessionId: req.params.sessionId,
      sender: req.user.name,
      message: req.body.message,
    });

    const saved = await newMessage.save();
    res.status(201).json(saved);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error posting message' });
  }
};
