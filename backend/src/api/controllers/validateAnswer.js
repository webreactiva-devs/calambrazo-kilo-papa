const Question = require('../models/questions');

const validateAnswer = async (questionId, userAnswer) => {
  try {
    console.log(`Validating answer for question ${questionId}`);
    const question = await Question.findById(questionId);
    console.log('pregunta encontrada: ', question);
    if (!question) {
      throw new Error('No se ha encontrado la pregunta');
    }

    const isCorrect = question.correct.trim() === String(userAnswer).trim();
    question.statistics.totalAttempts += 1;
    if (isCorrect) {
      question.statistics.correctAttempts += 1;
    } else {
      question.statistics.failedAttempts += 1;
    }

    await question.save();
    console.log('después de guardar:', question.statistics);

    return { correct: isCorrect };
  } catch (error) {
    console.error('Error al validar la respuesta', error);
    throw new Error('No se ha podido validar la respuesta');
  }
};

module.exports = { validateAnswer };
