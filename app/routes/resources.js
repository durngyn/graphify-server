const express = require('express');
const router = express.Router();

const resourcesController = require('../controllers/resourcesController')

//Request Resources from Spotify Web API

router.get("/playlists", resourcesController.getPlaylists)

router.get("/playlist-items", resourcesController.getSongsFromPlaylist)

router.get("/multiple-tracks", resourcesController.getMultipleSongDetails)

module.exports = router;