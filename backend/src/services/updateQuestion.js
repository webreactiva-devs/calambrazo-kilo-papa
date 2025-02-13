const Question = require('../api/models/questions');

const updateQuestionStats = async (questionId, isCorrect) => {
  try {
    const updateFields = {
      $inc: {
        'statistics.totalAttempts': 1,
        'statistics.correctAttempts': isCorrect ? 1 : 0
      }
    };

    const updatedQuestion = await Question.findByIdAndUpdate(
      questionId,
      updateFields,
      { new: true }
    );

    if (!updatedQuestion) {
      throw new Error('No se ha encontrado la pregunta');
    }

    return updatedQuestion;
  } catch (error) {
    console.error('Error al actualizar las estadísticas de la pregunta', error);
    throw new Error('No se ha podido actualizar la pregunta');
  }
};

module.exports = { updateQuestionStats };
