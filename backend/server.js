const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');

const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();

// ✅ Ensure uploads folder exists
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

// 🔐 Middleware
app.use(cors());
app.use(express.json());

// 📦 Static file access for uploaded images
app.use('/uploads', express.static(uploadsDir));

// 🚀 API Routes
const alumniRoutes = require('./routes/alumniRoutes');
const authRoutes = require('./routes/auth');
const profileRoutes = require('./routes/profile');
const newsRoutes = require('./routes/news');
const uploadRoute = require('./routes/upload');
const adminRoutes = require('./routes/adminRoutes');


app.use('/api/alumni', alumniRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/job-news', newsRoutes);
app.use('/api/upload', uploadRoute);
app.use('/api/admin', adminRoutes);


// ✅ Global error handler (optional enhancement)
app.use((err, req, res, next) => {
  console.error('❌ Server Error:', err.stack);
  res.status(500).json({ message: 'Server error occurred' });
});

// 🔊 Server Start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT} 🚀`));
