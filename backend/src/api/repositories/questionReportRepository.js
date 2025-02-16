const { calculateSuccessRate } = require('../../utils/calcSuccessRate.js');
const Question = require('../models/questions.js');

const questionReportRepository = {
  getAllQuestionsWithStats: async () => {
    const questions = await Question.find({}, { correct: 0, __v: 0 });

    const questionsWithSuccessRate = questions.map((q) => {
      const successRate = calculateSuccessRate(q.statistics);
      return {
        ...q.toObject(),
        successRate
      };
    });
    return questionsWithSuccessRate;
  }
};

module.exports = { questionReportRepository };
