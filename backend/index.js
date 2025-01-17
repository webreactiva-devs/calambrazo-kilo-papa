const express = require('express');
const questionsRoutes = require('./src/api/routes/routes');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());

app.use(express.json());
app.use('/api', questionsRoutes);

app.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});
