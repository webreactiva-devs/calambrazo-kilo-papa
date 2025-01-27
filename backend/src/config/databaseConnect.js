const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log('Connected to Calambrazo Project');
  } catch (error) {
    console.error('Error connecting to database', error);
  }
};

module.exports = { connectDB };
