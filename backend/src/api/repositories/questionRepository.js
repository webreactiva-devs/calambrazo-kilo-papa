const Question = require('../models/questions.js');

const questionRepository = {
  getAllQuestions: async () => {
    return await Question.find({}, { correct: 0, __v: 0 });
  }
};

module.exports = { questionRepository };
