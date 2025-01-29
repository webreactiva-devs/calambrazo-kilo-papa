const { getQuestions } = require('../controllers/getQuestions');
const { validateAnswer } = require('../controllers/validateAnswer');

const questionsRoutes = require('express').Router();

questionsRoutes.get('/questions', async (req, res) => {
  try {
    const questions = await getQuestions();
    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las preguntas' });
  }
});

questionsRoutes.post('/validate', async (req, res) => {
  const { questionId, userAnswer } = req.body;

  try {
    const { correct } = await validateAnswer(questionId, userAnswer);
    res.status(200).json({ correct });
  } catch (error) {
    res.status(500).json({ message: 'Error al validar la respuesta' });
  }
});

module.exports = questionsRoutes;
