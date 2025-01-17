export const restartBtn = (onRestart) => {
  const restartBtn = document.getElementById('restart-btn');
  restartBtn.addEventListener('click', onRestart);
};

export const toggleRestartBtn = (show) => {
  const restartBtn = document.getElementById('restart-btn');
  const buttonContainer = document.getElementById('button-container');

  restartBtn.style.display = show ? 'block' : 'none';
  buttonContainer.style.display = show ? 'none' : 'flex';
};
