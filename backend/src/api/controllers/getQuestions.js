const { calculateSuccessRate } = require('../../utils/calcSuccessRate');
const { questionRepository } = require('../repositories/questionRepository');

const getQuestions = async () => {
  try {
    const question = await questionRepository.getAllQuestions();

    return question.map((q) => ({
      ...q.toObject(),
      successRate: calculateSuccessRate(q.statistics),
      level: q.level
    }));
  } catch (error) {
    console.error('Error al leer el archivo de preguntas', error);
    throw new Error('No se ha podido obtener las preguntas');
  }
};

module.exports = { getQuestions };
