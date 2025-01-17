const { getQuestions, validateAnswer } = require('../controllers/getQuestions');

const questionsRoutes = require('express').Router();

questionsRoutes.get('/questions', (req, res) => {
  try {
    const questions = getQuestions();
    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las preguntas' });
  }
});

questionsRoutes.post('/validate', (req, res) => {
  const { questionId, userAnswer } = req.body;

  try {
    const isCorrect = validateAnswer(questionId, userAnswer);
    res.status(200).json({ correct: isCorrect });
  } catch (error) {
    res.status(500).json({ message: 'Error al validar la respuesta' });
  }
});

module.exports = questionsRoutes;
