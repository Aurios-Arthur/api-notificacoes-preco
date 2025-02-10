const { Alert } = require('../models');

// Criar alerta
exports.createAlert = async (req, res) => {
  try {
    const alert = await Alert.create(req.body);
    res.status(201).json(alert);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Buscar alertas de um usuário
exports.getUserAlerts = async (req, res) => {
  try {
    const alerts = await Alert.findAll({
      where: { userId: req.params.userId },
    });
    res.status(200).json(alerts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};