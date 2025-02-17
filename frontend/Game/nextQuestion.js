import { toggleNextQuestionBtn } from '../Components/restart.js';
import { loadNextQuestion } from './loadNextQuestion.js';

export const nextQuestion = (
  questionEl,
  statsEl,
  feedbackEl,
  sessionQuestions,
  questionIndex,
  configBtn,
  setQuestionIndex,
  setCurrentQuestion
) => {
  if (!Array.isArray(sessionQuestions) || !sessionQuestions.length) {
    console.error('Error: sessionQuestions no es un array o está vacío');
    return;
  }

  if (questionIndex < sessionQuestions.length - 1) {
    const newIndex = questionIndex + 1;
    setQuestionIndex(newIndex);
    loadNextQuestion(
      questionEl,
      statsEl,
      feedbackEl,
      sessionQuestions,
      newIndex,
      configBtn,
      setCurrentQuestion
    );
  } else {
    toggleNextQuestionBtn(false);
  }
};
