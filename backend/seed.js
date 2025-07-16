const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Alumni = require('./models/Alumni');

dotenv.config();
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const sampleAlumni = [
  {
    name: 'Aarav Mehta',
    batch: '2018',
    email: 'aarav.mehta@example.com',
    company: 'TCS',
    position: 'Software Engineer',
  },
  {
    name: 'Priya Singh',
    batch: '2019',
    email: 'priya.singh@example.com',
    company: 'Google',
    position: 'Data Analyst',
  },
  {
    name: 'Raj Patel',
    batch: '2020',
    email: 'raj.patel@example.com',
    company: 'Infosys',
    position: 'Backend Developer',
  }
];

const insertData = async () => {
  try {
    await Alumni.deleteMany(); // clear old data
    await Alumni.insertMany(sampleAlumni);
    console.log('Sample alumni data inserted ✅');
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

insertData();
