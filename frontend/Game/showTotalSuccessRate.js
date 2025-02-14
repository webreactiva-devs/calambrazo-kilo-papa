export const showTotalSuccessRate = (userAnswers, sessionQuestions) => {
  const correctAnswers = userAnswers.filter(
    (answer) => answer.isCorrect === true
  ).length;

  const totalQuestions = sessionQuestions.length;
  const successRate = (correctAnswers / totalQuestions) * 100;
  return successRate.toFixed(2);
};
