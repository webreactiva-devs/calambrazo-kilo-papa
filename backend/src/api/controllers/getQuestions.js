const path = require('path');
const fs = require('fs');

const questionsFilePath = path.join(__dirname, '../../seed/questions.json');
const data = fs.readFileSync(questionsFilePath, 'utf-8');
const questions = JSON.parse(data);

const getQuestions = () => {
  try {
    const questionsWithoutAnswers = questions.map(
      ({ answer, ...rest }) => rest
    );

    return questionsWithoutAnswers;
  } catch (error) {
    console.error('Error al leer el archivo de preguntas', error);
    throw new Error('No se ha podido obtener las preguntas');
  }
};

const validateAnswer = (questionId, userAnswer) => {
  try {
    const question = questions.find((q) => q.id === questionId);
    if (!question) return false;

    return question.answer === userAnswer;
  } catch (error) {
    console.error('Error al validar la respuesta', error);
    throw new Error('No se ha podido validar la respuesta');
  }
};

module.exports = { getQuestions, validateAnswer };
