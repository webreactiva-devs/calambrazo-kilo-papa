export const statsAndLevel = (resultEl, successRate, level) => {
  const statsEl = document.createElement('p');
  const levelEl = document.createElement('p');

  statsEl.className = 'stats';
  levelEl.className = 'level';

  statsEl.textContent = `Histórico de aciertos: ${successRate}`;
  levelEl.textContent = `Dificultad: ${
    level.charAt(0).toUpperCase() + level.slice(1)
  }`;

  const existingStats = document.getElementsByClassName('stats');
  const existingLevel = document.getElementsByClassName('level');
  // if (existingStats) existingStats.remove();
  // if (existingLevel) existingLevel.remove();

  resultEl.appendChild(statsEl);
  resultEl.appendChild(levelEl);
};
