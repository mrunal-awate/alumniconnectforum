const User = require('../models/User');

// ✅ GET all verified alumni
exports.getAllAlumni = async (req, res) => {
  try {
    const alumni = await User.find({ role: 'alumni', verified: true }).select(
      'fullName email yearOfPassing company designation location linkedIn imageUrl role phone batch'
    );
    res.json(alumni);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ GET alumni by ID
exports.getAlumniById = async (req, res) => {
  try {
    const alumni = await User.findById(req.params.id).select(
      'fullName email phone yearOfPassing batch company designation location linkedIn role imageUrl'
    );

    if (!alumni || alumni.role !== 'alumni') {
      return res.status(404).json({ message: 'Alumni not found' });
    }

    res.json(alumni);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching alumni profile' });
  }
};

// ✅ GET /api/alumni/pending - All alumni awaiting verification
exports.getPendingAlumni = async (req, res) => {
  try {
    const pending = await User.find({ role: 'alumni', verified: false }).select(
      'fullName email yearOfPassing company designation location linkedIn imageUrl role phone batch'
    );
    res.json(pending);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch pending alumni' });
  }
};

// ✅ PUT /api/alumni/verify/:id - Approve an alumni
exports.verifyAlumniById = async (req, res) => {
  try {
    const alumni = await User.findById(req.params.id);

    if (!alumni || alumni.role !== 'alumni') {
      return res.status(404).json({ message: 'Alumni not found' });
    }

    alumni.verified = true;
    await alumni.save();

    res.json({ message: 'Alumni account verified successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to verify alumni' });
  }
};
