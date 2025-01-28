export const setUpButtons = (onAnswer) => {
  const buttonsContainer = document.getElementById('button-container');
  buttonsContainer.innerHTML = '';

  return (options) => {
    buttonsContainer.innerHTML = ``;
    options.forEach((option) => {
      const button = document.createElement('button');
      button.textContent = option;
      button.classList.add('answer-btn', 'btn');
      button.addEventListener('click', () => onAnswer(option));
      buttonsContainer.appendChild(button);
    });
  };
};

export const disableButtons = () => {
  document.querySelectorAll('.answer-btn').forEach((btn) => {
    btn.disabled = true;
  });
};

export const enableButtons = () => {
  document.querySelectorAll('.answer-btn').forEach((btn) => {
    btn.disabled = false;
  });
};
