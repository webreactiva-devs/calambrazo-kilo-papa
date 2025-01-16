import { initApp } from './App.js';

document.addEventListener('DOMContentLoaded', initApp);

// // Game logic
// const question = 'El planeta Marte es completamente verde.';
// const correctAnswer = false;

// const questionEl = document.getElementById('question');
// const trueBtn = document.getElementById('true-btn');
// const falseBtn = document.getElementById('false-btn');
// const resultEl = document.getElementById('result');
// const restartBtn = document.getElementById('restart-btn');
// const buttonContainer = document.getElementById('button-container');
// const confettiContainer = document.getElementById('confetti-container');

// function checkAnswer(userAnswer) {
//   // Disable buttons after answer
//   trueBtn.disabled = true;
//   falseBtn.disabled = true;

//   if (userAnswer === correctAnswer) {
//     // Correct answer
//     resultEl.textContent = '¡Correcto! 🎉';
//     resultEl.style.color = 'green';
//     createConfetti();
//   } else {
//     // Incorrect answer
//     resultEl.textContent = '¡Ups! Respuesta incorrecta 😢';
//     resultEl.style.color = 'red';
//   }

//   // Show restart button
//   restartBtn.style.display = 'block';
//   buttonContainer.style.display = 'none';
// }

// function createConfetti() {
//   const colors = ['#f87171', '#facc15', '#4ade80', '#38bdf8', '#a78bfa'];
//   for (let i = 0; i < 100; i++) {
//     const confetti = document.createElement('div');
//     confetti.classList.add('confetti');

//     // Random position, color, and fall animation
//     confetti.style.left = `${Math.random() * 100}%`;
//     confetti.style.backgroundColor =
//       colors[Math.floor(Math.random() * colors.length)];
//     confetti.style.borderColor =
//       colors[Math.floor(Math.random() * colors.length)];

//     // Random fall animation
//     const duration = Math.random() * 3 + 2;
//     const delay = Math.random() * 2;
//     confetti.style.animation = `fall ${duration}s ${delay}s linear forwards`;

//     confettiContainer.appendChild(confetti);
//   }

//   // Remove confetti after animation
//   setTimeout(() => {
//     confettiContainer.innerHTML = '';
//   }, 5000);
// }

// function resetGame() {
//   resultEl.textContent = '';
//   trueBtn.disabled = false;
//   falseBtn.disabled = false;
//   restartBtn.style.display = 'none';
//   buttonContainer.style.display = 'flex';
// }

// // Event Listeners
// trueBtn.addEventListener('click', () => checkAnswer(true));
// falseBtn.addEventListener('click', () => checkAnswer(false));
// restartBtn.addEventListener('click', resetGame);

// // Add custom CSS animation for confetti
// const style = document.createElement('style');
// style.textContent = `
//       @keyframes fall {
//           to {
//               transform: translateY(100vh) rotate(360deg);
//               opacity: 0;
//           }
//       }
//   `;
// document.head.appendChild(style);
