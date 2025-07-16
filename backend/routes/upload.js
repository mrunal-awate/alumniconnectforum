const express = require('express');
const multer = require('multer');
const path = require('path');

const router = express.Router();

// ✅ 1. Setup storage
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename(req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

// ✅ 2. Set file size limit (e.g., 5MB) and filter for images only
const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // ✅ 5MB
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png|gif/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);
    if (extname && mimetype) {
      return cb(null, true);
    }
    cb(new Error('Only image files are allowed!'));
  },
});

// ✅ 3. Route to handle upload
router.post('/', upload.single('image'), (req, res) => {
  if (!req.file) return res.status(400).json({ message: 'No file uploaded' });
  const fileUrl = `/uploads/${req.file.filename}`;
  res.json({ imageUrl: fileUrl });
});

module.exports = router;













// const express = require('express');
// const multer = require('multer');
// const path = require('path');

// const router = express.Router();

// // ✔️ Allowed image types
// const imageTypes = /jpeg|jpg|png|gif/;

// // ✔️ File type check function
// const checkFileType = (file, cb) => {
//   const extname = imageTypes.test(path.extname(file.originalname).toLowerCase());
//   const mimetype = imageTypes.test(file.mimetype);
//   if (extname && mimetype) {
//     return cb(null, true);
//   } else {
//     cb('Images only! (jpeg, jpg, png, gif)');
//   }
// };

// // ✔️ Storage config
// const storage = multer.diskStorage({
//   destination(req, file, cb) {
//     cb(null, 'uploads/');
//   },
//   filename(req, file, cb) {
//     cb(null, `${Date.now()}-${file.originalname}`);
//   },
// });

// // ✔️ Upload middleware with validation
// const upload = multer({
//   storage,
//   limits: { fileSize: 2 * 1024 * 1024 }, // 2 MB max
//   fileFilter: (req, file, cb) => checkFileType(file, cb),
// });

// // ✔️ POST /api/upload — handle image upload
// router.post('/', upload.single('image'), (req, res) => {
//   if (!req.file) {
//     return res.status(400).json({ message: 'No file uploaded or invalid format' });
//   }

//   const fileUrl = `/uploads/${req.file.filename}`; // Frontend can access via /uploads/...
//   res.json({ imageUrl: fileUrl });
// });

// module.exports = router;
