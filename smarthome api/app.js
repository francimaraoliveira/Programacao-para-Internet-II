const express = require('express');
const mongoose = require('mongoose');
const locaisRoutes = require('./src/routes/locaisRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/smarthome', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());
app.use('/api', locaisRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
