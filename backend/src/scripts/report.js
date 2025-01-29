const mongoose = require('mongoose');
const { getQuestions } = require('../api/controllers/getQuestions');
require('dotenv').config();

const generateReport = async () => {
  mongoose.connect(process.env.DB_URL);

  try {
    const question = await getQuestions();
    console.log('---Informe de preguntas---');

    question.forEach((q, index) => {
      console.log(`${index + 1}. ${q.question}`);
      console.log(`${q.level} | ${q.successRate}`);
      console.log('------------------------');
    });
  } catch (error) {
    console.error('Error al generar el informe', error);
    mongoose.connection.close();
  }
};

generateReport();
