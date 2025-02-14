export const statsAndLevel = (statsEl, successRate, level) => {
  statsEl.innerHTML = '';

  const stats = document.createElement('p');
  const levelEl = document.createElement('p');

  stats.className = 'stats';
  levelEl.className = 'level';

  stats.textContent = `Histórico de aciertos: ${successRate}`;
  levelEl.textContent = `Dificultad: ${
    level.charAt(0).toUpperCase() + level.slice(1)
  }`;

  statsEl.appendChild(stats);
  statsEl.appendChild(levelEl);
};
