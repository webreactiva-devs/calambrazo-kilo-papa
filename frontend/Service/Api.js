const BASE_URL = 'https://calambrazo-kilo-papa.onrender.com';

export const fetchQuestions = async () => {
  const response = await fetch(`${BASE_URL}/questions`);
  if (!response.ok) {
    throw new Error('Error al obtener las preguntas');
  }
  return response.json();
};

export const validateAnswer = async (questionId, userAnswer) => {
  const response = await fetch(`${BASE_URL}/validate`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ questionId, userAnswer })
  });
  if (!response.ok) {
    throw new Error('Error al validar la respuesta');
  }
  return response.json();
};
