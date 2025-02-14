import { questionText } from '../Components/question.js';
import { toggleNextQuestionBtn } from '../Components/restart.js';
import { fetchQuestions } from '../Service/Api.js';
import { loadNextQuestion } from './loadNextQuestion.js';

export const startSession = async (
  questionEl,
  statsEl,
  feedbackEl,
  configBtn,
  setSessionQuestions,
  setQuestionIndex,
  setUserAnswers,
  setCurrentQuestion
) => {
  try {
    const questions = await fetchQuestions();
    console.log(questions);
    const sessionQuestions = questions
      .sort(() => Math.random() - 0.5)
      .slice(0, 5);
    setSessionQuestions(sessionQuestions);
    setQuestionIndex(0);
    setUserAnswers([]);
    loadNextQuestion(
      questionEl,
      statsEl,
      feedbackEl,
      sessionQuestions,
      0,
      configBtn,
      setCurrentQuestion
    );
    toggleNextQuestionBtn(false);
  } catch (error) {
    console.error(error);
    questionText(questionEl, 'Error al cargar las preguntas');
  }
};

// export const startSession = async (
//   questionEl,
//   resultEl,
//   configBtn,
//   setSessionQuestions,
//   setQuestionIndex
// ) => {
//   try {
//     const questions = await fetchQuestions();
//     const sessionQuestions = questions
//       .sort(() => Math.random() - 0.5)
//       .slice(0, 5);
//     setSessionQuestions(sessionQuestions);
//     setQuestionIndex(0);
//     loadNextQuestion(questionEl, resultEl, sessionQuestions, 0, configBtn);
//   } catch (error) {
//     console.error(error);
//     questionText(questionEl, 'Error al cargar las preguntas');
//   }
// };
