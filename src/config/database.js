const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME, // Nome do banco de dados
  process.env.DB_USER, // Usuário do banco de dados
  process.env.DB_PASSWORD, // Senha do banco de dados
  {
    host: process.env.DB_HOST, // Host do banco de dados
    dialect: 'mysql', // Tipo de banco de dados
    logging: false, // Desativa logs de SQL no console
  }
);

// Testar a conexão
sequelize.authenticate()
  .then(() => console.log('Conectado ao MySQL com sucesso!'))
  .catch(err => console.error('Erro ao conectar ao MySQL:', err));

module.exports = sequelize;