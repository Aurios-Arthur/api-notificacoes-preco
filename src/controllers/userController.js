const { User, Alert } = require('../models');

// Criar usuário
const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Buscar usuário
const getUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id, {
      include: [{ model: Alert, as: 'alerts' }], // Usar o mesmo alias 'alerts'
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createUser,
  getUser,
};