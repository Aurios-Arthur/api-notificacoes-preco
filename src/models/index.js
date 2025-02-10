const sequelize = require('../config/database');
const User = require('./User');
const Alert = require('./Alert');

// Definir relações
User.hasMany(Alert, { foreignKey: 'userId', as: 'alerts' }); // Alias 'alerts'
Alert.belongsTo(User, { foreignKey: 'userId', as: 'user' }); // Alias 'user'

// Sincronizar modelos com o banco de dados
sequelize.sync({ force: true }) // force: true recria as tabelas (cuidado em produção!)
  .then(() => console.log('Tabelas sincronizadas com sucesso!'))
  .catch(err => console.error('Erro ao sincronizar tabelas:', err));

module.exports = {
  User,
  Alert,
};