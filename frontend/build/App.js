import {
  nextQuestionBtn,
  restartBtn,
  toggleNextQuestionBtn,
  toggleRestartBtn
} from './Components/restart.js';
import { nextQuestion } from './Game/nextQuestion.js';
import { handleAnswer } from './Game/handleAnswer.js';
import { startSession } from './Game/startSession.js';
import { setUpButtons } from './Components/buttons.js';

export const initApp = () => {
  const questionEl = document.getElementById('question');
  const resultEl = document.getElementById('result');
  const feedbackEl = document.getElementById('feedback');
  const statsEl = document.getElementById('stats');
  const confettiContainer = document.getElementById('confetti-container');
  const startBtn = document.getElementById('start-btn');

  let currentQuestion = null;
  let questionIndex = 0;
  let sessionQuestions = [];
  let userAnswers = [];

  const setSessionQuestions = (questions) => {
    sessionQuestions = questions;
    console.log('Session Questions:', sessionQuestions);
  };
  const setQuestionIndex = (index) => {
    questionIndex = index;
    console.log('Question Index:', questionIndex);
  };

  const setUserAnswers = (answers) => {
    userAnswers = answers;
    console.log('User Answers:', userAnswers); // Depuración
  };

  const setCurrentQuestion = (question) => {
    currentQuestion = question;
    console.log('Current Question:', currentQuestion); // Depuración
  };

  const configBtn = setUpButtons((userAnswer) =>
    handleAnswer(
      userAnswer,
      currentQuestion,
      confettiContainer,
      feedbackEl,
      resultEl,
      questionIndex,
      sessionQuestions,
      userAnswers,
      setUserAnswers
    )
  );

  startBtn.addEventListener('click', () => {
    startSession(
      questionEl,
      statsEl,
      feedbackEl,
      configBtn,
      setSessionQuestions,
      setQuestionIndex,
      setUserAnswers,
      setCurrentQuestion
    );
    startBtn.style.display = 'none';
  });

  nextQuestionBtn(() =>
    nextQuestion(
      questionEl,
      statsEl,
      feedbackEl,
      sessionQuestions,
      questionIndex,
      configBtn,
      setQuestionIndex,
      setCurrentQuestion
    )
  );

  restartBtn(() => {
    startSession(
      questionEl,
      statsEl,
      feedbackEl,
      configBtn,
      setSessionQuestions,
      setQuestionIndex,
      setUserAnswers,
      setCurrentQuestion
    );
    toggleRestartBtn(false);
    toggleNextQuestionBtn(false);
    feedbackEl.textContent = '';
    resultEl.textContent = '';
  });
};
