export const setUpButtons = (onAnswer) => {
  const trueBtn = document.getElementById('true-btn');
  const falseBtn = document.getElementById('false-btn');

  trueBtn.addEventListener('click', () => onAnswer(true));
  falseBtn.addEventListener('click', () => onAnswer(false));
};

export const disableButtons = () => {
  document.getElementById('true-btn').disabled = true;
  document.getElementById('false-btn').disabled = true;
};

export const enableButtons = () => {
  document.getElementById('true-btn').disabled = false;
  document.getElementById('false-btn').disabled = false;
};
