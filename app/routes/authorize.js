const express = require('express');
const router = express.Router();

const authorizeController = require('../controllers/authorizeController')

//Authorization endpoints for token exchange and logging in to Spotify

router.get("/authorize", authorizeController.testController)

router.post("/exchange-code", (req, res) => {
    res.send("exchange code")
})

module.exports = router;