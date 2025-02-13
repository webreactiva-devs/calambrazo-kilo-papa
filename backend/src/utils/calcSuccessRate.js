const calculateSuccessRate = (statistics) => {
  if (statistics.totalAttempts === 0) return `0%`;
  const successRate = (
    (statistics.correctAttempts / statistics.totalAttempts) *
    100
  ).toFixed(2);
  return `${successRate}%`;
};

module.exports = { calculateSuccessRate };
