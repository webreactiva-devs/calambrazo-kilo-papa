export const setUpButtons = (onAnswer) => {
  const buttonsContainer = document.getElementById('button-container');

  return (answers) => {
    console.log('Respuestas:', answers);
    buttonsContainer.innerHTML = ``;
    if (!answers || answers.lenght === 0) {
      console.error('No existen respuestas para mostrar');
      return;
    }

    answers.forEach((answer) => {
      const button = document.createElement('button');
      button.textContent = answer;
      button.classList.add('answer-btn', 'btn');
      button.addEventListener('click', () => onAnswer(answer));
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
