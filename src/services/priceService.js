const axios = require('axios');

// Buscar preço de uma criptomoeda
const getCryptoPrice = async (cryptoId) => {
  try {
    const response = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${cryptoId}&vs_currencies=usd`);
    return response.data[cryptoId].usd;
  } catch (error) {
    console.error('Erro ao buscar preço:', error.message);
    return null;
  }
};

module.exports = { getCryptoPrice };