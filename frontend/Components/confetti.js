export const createConfetti = () => {
  const colors = ['#f87171', '#facc15', '#4ade80', '#38bdf8', '#a78bfa'];
  const confettiContainer = document.getElementById('confetti-container');
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');

    // Random position, color, and fall animation
    confetti.style.left = `${Math.random() * 100}%`;
    confetti.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
    confetti.style.borderColor =
      colors[Math.floor(Math.random() * colors.length)];

    // Random fall animation
    const duration = Math.random() * 3 + 2;
    const delay = Math.random() * 2;
    confetti.style.animation = `fall ${duration}s ${delay}s linear forwards`;

    confettiContainer.appendChild(confetti);
  }

  // Remove confetti after animation
  setTimeout(() => {
    confettiContainer.innerHTML = '';
  }, 5000);
};

const style = document.createElement('style');
style.textContent = `
       @keyframes fall {
           to {
               transform: translateY(100vh) rotate(360deg);
               opacity: 0;
           }
       }
   `;
document.head.appendChild(style);
