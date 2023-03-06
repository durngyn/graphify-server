const express = require('express');
const router = express.Router();

const resourcesController = require('../controllers/resourcesController')

//Request Resources from Spotify Web API

router.get("/playlists", resourcesController.getPlaylists)

router.post("/temp2", (req, res) => {
    res.send("temp2")
})

module.exports = router;