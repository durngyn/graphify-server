const express = require('express');
const router = express.Router();

//Request Resources from Spotify Web API

router.get("/temp", (req, res) => {
    res.send("temp")
})

router.post("/temp2", (req, res) => {
    res.send("temp2")
})

module.exports = router;