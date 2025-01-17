export const displayResult = (element, message, color) => {
  element.textContent = message;
  element.style.color = color;
};

export const clearResult = (element) => {
  element.textContent = '';
};
