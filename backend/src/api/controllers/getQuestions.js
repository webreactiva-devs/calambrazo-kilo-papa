const Question = require('../models/questions');

const getQuestions = async () => {
  try {
    const question = await Question.find({}, { correct: 0, __v: 0 });

    return question.map((q) => {
      const successRate =
        q.statistics.totalAttempts > 0
          ? (
              (q.statistics.correctAttempts / q.statistics.totalAttempts) *
              100
            ).toFixed(2)
          : 0;
      return { ...q.toObject(), successRate: `${successRate}%` };
    });
  } catch (error) {
    console.error('Error al leer el archivo de preguntas', error);
    throw new Error('No se ha podido obtener las preguntas');
  }
};

module.exports = { getQuestions };
