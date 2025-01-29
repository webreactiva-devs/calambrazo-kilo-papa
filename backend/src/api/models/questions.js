const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema(
  {
    question: { type: String, required: true },
    answers: { type: [String], required: true },
    correct: { type: String, required: true },
    level: {
      type: String,
      enum: ['basic', 'intermediate', 'advanced'],
      required: true
    },
    statistics: {
      totalAttempts: { type: Number, default: 0 },
      correctAttempts: { type: Number, default: 0 }
    }
  },
  {
    timestamps: true,
    collection: 'questions'
  }
);

const Question = mongoose.model('questions', questionSchema, 'questions');

module.exports = Question;
