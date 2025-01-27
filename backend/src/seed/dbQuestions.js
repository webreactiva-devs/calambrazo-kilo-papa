require('dotenv').config();
const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');
const Question = require('../api/models/questions');

const questionsFilePath = path.join(__dirname, './questions.json');
const data = fs.readFileSync(questionsFilePath, 'utf-8');
const questions = JSON.parse(data);

const seedQuestionsDB = async () => {
  await mongoose.connect(process.env.DB_URL);

  try {
    await Question.deleteMany({});
    console.log('Preguntas anteriores eliminadas');

    const questionsWithStats = questions.map((q) => ({
      ...q,
      statistics: {
        totalAttempts: 20,
        correctAttempts: 0,
        failedAttempts: 0
      }
    }));
    await Question.insertMany(questionsWithStats);
    console.log('Preguntas insertadas correctamente');
    mongoose.connection.close();
    console.log('Conexión cerrada con éxito');
  } catch (error) {
    console.error('Error al insertar las preguntas:', error);
    mongoose.connection.close();
  }
};

seedQuestionsDB();
