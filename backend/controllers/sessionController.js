// controllers/sessionController.js
const Session = require('../models/session');

exports.uploadSession = async (req, res) => {
  try {
    const { title, description } = req.body;
    const uploadedBy = req.user.id;

    const videoUrl = `/uploads/${req.file.filename}`;

    const newSession = new Session({
      title,
      description,
      videoUrl,
      uploadedBy,
    });

    await newSession.save();
    res.status(201).json(newSession);
  } catch (error) {
    console.error('Upload error:', error.message);
    res.status(500).json({ message: 'Failed to upload session' });
  }
};

exports.getAllSessions = async (req, res) => {
  try {
    const sessions = await Session.find().sort({ createdAt: -1 });
    res.json(sessions);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch sessions' });
  }
};

exports.getSessionById = async (req, res) => {
  try {
    const session = await Session.findById(req.params.id);
    if (!session) return res.status(404).json({ message: 'Session not found' });
    res.json(session);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching session' });
  }
};
