export const restartBtn = (onRestart) => {
  const restartBtn = document.getElementById('restart-btn');
  restartBtn.addEventListener('click', onRestart);
};

export const toggleRestartBtn = (show) => {
  const restartBtn = document.getElementById('restart-btn');

  if (restartBtn) {
    restartBtn.style.display = show ? 'block' : 'none';
  }
};

export const nextQuestionBtn = (onNext) => {
  const nextQuestion = document.getElementById('next-btn');
  if (!nextQuestion) {
    console.error(' el botón #next-btn no se ha encontrado');
    return;
  }
  nextQuestion.addEventListener('click', onNext);
};

export const toggleNextQuestionBtn = (show) => {
  const nextQuestion = document.getElementById('next-btn');
  if (!nextQuestion) {
    console.error(' el botón #next-btn no se ha encontrado');
    return;
  }
  nextQuestion.style.display = show ? 'block' : 'none';
};
