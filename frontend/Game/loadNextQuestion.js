import { enableButtons } from '../Components/buttons.js';
import { questionText } from '../Components/question.js';
import { toggleNextQuestionBtn } from '../Components/restart.js';
import { clearResult } from '../Components/result.js';
import { statsAndLevel } from '../Components/statsAndLevel.js';

export const loadNextQuestion = (
  questionEl,
  statsEl,
  feedbackEl,
  sessionQuestions,
  questionIndex,
  configBtn,
  setCurrentQuestion
) => {
  const question = sessionQuestions[questionIndex];
  console.log('pregunta cargada:', question);
  if (question) {
    setCurrentQuestion(question);
    questionEl.textContent = question.question || 'pregunta no encontrada';

    if (Array.isArray(question.answers)) {
      configBtn(question.answers);
    } else {
      console.error(
        'Error: Las respuestas de la pregunta están indefinidas o no son un array'
      );
    }
    feedbackEl.textContent = '';
    statsAndLevel(statsEl, question.successRate, question.level);
  } else {
    console.error('No se ha encontrado la pregunta', question);
  }
};
