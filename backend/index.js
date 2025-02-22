const express = require('express');
const questionsRoutes = require('./src/api/routes/routes');
const cors = require('cors');
const { connectDB } = require('./src/config/databaseConnect');

const app = express();
const PORT = 3000;

app.use(cors());
connectDB();

app.use(express.json());
app.use('/api', questionsRoutes);

app.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});
