const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Alert = sequelize.define('Alert', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Users', // Nome da tabela de usuários
      key: 'id',
    },
  },
  productName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  targetPrice: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
});

module.exports = Alert;