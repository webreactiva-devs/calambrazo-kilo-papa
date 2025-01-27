import { questionText } from './Components/question.js';
import {
  setUpButtons,
  disableButtons,
  enableButtons
} from './Components/buttons.js';
import { createConfetti } from './Components/confetti.js';
import { restartBtn, toggleRestartBtn } from './Components/restart.js';
import { displayResult, clearResult } from './Components/result.js';
import { fetchQuestions, validateAnswer } from './Service/Api.js';

export const initApp = () => {
  const questionEl = document.getElementById('question');
  const resultEl = document.getElementById('result');
  const confettiContainer = document.getElementById('confetti-container');

  let currentQuestion = null;

  const handleAnswer = async (userAnswer) => {
    disableButtons();
    try {
      const { correctAnswer } = await validateAnswer(
        currentQuestion._id,
        String(userAnswer)
      );
      if (correctAnswer) {
        displayResult(resultEl, '¡Correcto!', 'green');
        createConfetti(confettiContainer);
      } else {
        displayResult(resultEl, '¡Ups! Respuesta incorrecta', 'red');
      }
      toggleRestartBtn(true);
    } catch (error) {
      console.error(error);
      displayResult(resultEl, 'Error al validar la respuesta.', 'red');
    }
  };

  const configBtn = setUpButtons(handleAnswer);

  const loadQuestion = async () => {
    try {
      const questions = await fetchQuestions();
      currentQuestion = questions[Math.floor(Math.random() * questions.length)];
      questionText(questionEl, currentQuestion.question);
      configBtn(currentQuestion.answers);
    } catch (error) {
      console.error(error);
      questionText(questionEl, 'Error al cargar las preguntas');
    }
  };

  const resetGame = () => {
    clearResult(resultEl);
    enableButtons();
    toggleRestartBtn(false);
    loadQuestion();
  };

  restartBtn(resetGame);
  loadQuestion();
};
