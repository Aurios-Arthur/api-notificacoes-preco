const { User, Alert } = require('../models');
const { getCryptoPrice } = require('./priceService');
const { sendEmail } = require('../utils/notify');

// Verificar preços e notificar usuários
const checkPricesAndNotify = async () => {
  try {
    // Buscar todos os alertas ativos
    const alerts = await Alert.findAll({
      where: { isActive: true },
      include: [{ model: User, as: 'user' }], // Incluir dados do usuário
    });

    // Verificar cada alerta
    for (const alert of alerts) {
      const currentPrice = await getCryptoPrice(alert.productName.toLowerCase());

      if (currentPrice && currentPrice <= alert.targetPrice) {
        // Notificar o usuário
        const subject = `Alerta de Preço: ${alert.productName}`;
        const text = `O preço do ${alert.productName} atingiu ${currentPrice} USD!`;
        await sendEmail(alert.user.email, subject, text);

        // Desativar o alerta
        alert.isActive = false;
        await alert.save();
      }
    }
  } catch (error) {
    console.error('Erro ao verificar preços:', error.message);
  }
};

module.exports = { checkPricesAndNotify };