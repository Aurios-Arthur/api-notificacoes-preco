const express = require('express');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const alertRoutes = require('./routes/alertRoutes'); // Importar alertRoutes

dotenv.config();

const app = express();

// Middleware para ler JSON
app.use(express.json());

// Rotas
app.use('/api/users', userRoutes);
app.use('/api/alerts', alertRoutes); // Usar alertRoutes

// Rota inicial
app.get('/', (req, res) => {
  res.send('API de Notificações de Preço');
});

module.exports = app;