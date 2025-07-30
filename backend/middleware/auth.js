const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Middleware to protect routes (requires valid JWT token)
exports.protect = async (req, res, next) => {
  let token;

  // Extract token from Authorization header
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer ')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }

  // No token present
  if (!token) {
    return res.status(401).json({ message: 'Not authorized, token missing' });
  }

  try {
    // Verify token and decode payload
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach the authenticated user to req.user (excluding password)
    req.user = await User.findById(decoded.id).select('-password');

    if (!req.user) {
      return res.status(401).json({ message: 'User not found, invalid token' });
    }

    next(); // Proceed to the protected route
  } catch (err) {
    console.error('JWT Token verification error:', err.message);
    res.status(401).json({ message: 'Not authorized, token invalid' });
  }
};

// Optional: Role-based access control middleware
exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user?.role)) {
      return res.status(403).json({ message: 'Forbidden: Access denied' });
    }
    next();
  };
};
