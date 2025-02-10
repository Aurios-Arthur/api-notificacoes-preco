const app = require('./app');
const cron = require('node-cron');
const { checkPricesAndNotify } = require('./services/alertService');

const PORT = process.env.PORT || 5001;

// Agendar a verificação de preços a cada 5 minutos
cron.schedule('*/5 * * * *', () => {
  console.log('Verificando preços...');
  checkPricesAndNotify();
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});