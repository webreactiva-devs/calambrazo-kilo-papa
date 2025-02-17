import { disableButtons } from '../Components/buttons.js';
import { createConfetti } from '../Components/confetti.js';
import {
  toggleNextQuestionBtn,
  toggleRestartBtn
} from '../Components/restart.js';
import { showTotalSuccessRate } from './showTotalSuccessRate.js';
import { displayResult } from '../Components/result.js';
import { validateAnswer } from '../Service/Api.js';

export const handleAnswer = async (
  userAnswer,
  currentQuestion,
  confettiContainer,
  feedbackEl,
  resultEl,
  questionIndex,
  sessionQuestions,
  userAnswers,
  setUserAnswers
) => {
  disableButtons();
  try {
    const { correct } = await validateAnswer(currentQuestion._id, userAnswer);

    userAnswers.push({ questionId: currentQuestion._id, isCorrect: correct });
    setUserAnswers(userAnswers);

    if (correct) {
      displayResult(feedbackEl, '¡Correcto!', 'green');
      createConfetti(confettiContainer);
    } else {
      displayResult(feedbackEl, '¡Ups! Respuesta incorrecta', 'red');
    }

    if (questionIndex < sessionQuestions.length - 1) {
      toggleNextQuestionBtn(true);
    } else {
      const successRate = showTotalSuccessRate(userAnswers, sessionQuestions);
      console.log('Porcentaje de aciertos total:', successRate);
      displayResult(
        resultEl,
        `Porcentaje de aciertos total: ${successRate}%`,
        'blue'
      );
      toggleNextQuestionBtn(false);
      toggleRestartBtn(true);
    }
  } catch (error) {
    console.error(error);
    displayResult(feedbackEl, 'Error al validar la respuesta', 'red');
  }
};
