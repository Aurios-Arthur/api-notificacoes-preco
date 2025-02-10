const express = require('express');
const { createUser, getUser } = require('../controllers/userController'); // Importar corretamente

const router = express.Router();

router.post('/', createUser); // Usar a função importada
router.get('/:id', getUser); // Usar a função importada

module.exports = router;