const express = require('express');
const router = express.Router();

const authorizeController = require('../controllers/authorizeController')

//Authorization endpoints for token exchange and logging in to Spotify

router.get("/authorize", authorizeController.createRedirect)

router.post("/exchange-code", authorizeController.exchangeCode)

module.exports = router;