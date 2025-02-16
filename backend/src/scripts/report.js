const mongoose = require('mongoose');
const {
  questionReportRepository
} = require('../api/repositories/questionReportRepository');
const configRates = require('../utils/configRates.json');
require('dotenv').config();

const expectedRates = configRates.expectedRates;

const calcAccuracy = (level, successRate) => {
  const successRateNumber = parseFloat(successRate.replace('%', '').trim());
  const expectedRate = expectedRates[level.toLowerCase()] || 0;
  console.log(
    `Level: ${level}, SuccessRate: ${successRate}, ExpectedRate: ${expectedRate}`
  );
  return successRateNumber >= expectedRate ? '✔' : '✘';
};

const generateReport = async () => {
  mongoose.connect(process.env.DB_URL);

  try {
    const question = await questionReportRepository.getAllQuestionsWithStats();
    console.log('---Informe de preguntas---');

    question.forEach((q, index) => {
      const accuracy = calcAccuracy(q.level, q.successRate);
      console.log(`${index + 1}. ${q.question}`);
      console.log(`${q.level} | ${q.successRate} | ${accuracy}`);
      console.log('------------------------');
    });
  } catch (error) {
    console.error('Error al generar el informe', error);
    mongoose.connection.close();
  }
};

generateReport();
