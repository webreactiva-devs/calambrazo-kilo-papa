const { updateQuestionStats } = require('../../Services/updateQuestion.js');
const Question = require('../models/questions.js');

const validateAnswer = async (questionId, userAnswer) => {
  try {
    console.log(`Validating answer for question ${questionId}`);
    const question = await Question.findById(questionId);
    console.log('pregunta encontrada: ', question);
    if (!question) {
      throw new Error('No se ha encontrado la pregunta');
    }

    const isCorrect = question.correct === userAnswer;

    await updateQuestionStats(questionId, isCorrect);

    return { correct: isCorrect };
  } catch (error) {
    console.error('Error al validar la respuesta', error);
    throw new Error('No se ha podido validar la respuesta');
  }
};

module.exports = { validateAnswer };
