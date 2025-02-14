export const restartBtn = (onRestart) => {
  const restartBtn = document.getElementById('restart-btn');
  restartBtn.addEventListener('click', onRestart);
};

export const toggleRestartBtn = (show) => {
  const restartBtn = document.getElementById('restart-btn');
  // const buttonContainer = document.getElementById('button-container');
  if (restartBtn) {
    restartBtn.style.display = show ? 'block' : 'none';
  }
  // buttonContainer.style.display = show ? 'none' : 'flex';
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
  // const buttonContainer = document.getElementById('button-container');
  nextQuestion.style.display = show ? 'block' : 'none';
  // buttonContainer.style.display = show ? 'none' : 'flex';
};
