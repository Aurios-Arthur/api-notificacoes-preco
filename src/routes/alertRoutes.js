const express = require('express');
const { createAlert, getUserAlerts } = require('../controllers/alertController');

const router = express.Router();

router.post('/', createAlert);
router.get('/user/:userId', getUserAlerts);

module.exports = router;