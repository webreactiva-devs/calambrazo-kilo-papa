const Question = require('../models/questions');

const questionRepository = {
  getAllQuestions: async () => {
    return await Question.find({}, { correct: 0, __v: 0 });
  }
};

module.exports = { questionRepository };
