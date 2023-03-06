const axios = require('axios');

const env = process.env

const getPlaylists = (req, res) => {
    const route = "/v1/me/playlists"

    const options = {
        method: 'get',
        url: env.SPOTIFY_WEB_API_URI + route,
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + req.session.access_token
        }
    }

    axios(options)
        .then(data => {
            console.log("Data retrieved")
            console.log(data.data.items)
            res.send(data.data.items)
        })
        .catch(err => {
            console.log("Error retreived")
            console.log(err)
            res.send("Error with request to Spotify API")
        })
}

const getSongsFromPlaylist = (req, res) => {
    const params = req.query

    console.log(params)
    const route = `/v1/playlists/${params.playlist_id}/tracks`

    const options = {
        method: 'get',
        url: env.SPOTIFY_WEB_API_URI + route,
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + req.session.access_token
        },
        params: {
            market: "US"
        }
    }

    axios(options)
        .then(data => {
            console.log("Data retrieved")
            res.send(data.data)
        })
        .catch(err => {
            console.log("Error retreived")
            console.log(err)
            res.send("Error with request to Spotify API")
        })
}

module.exports = {
    getPlaylists,
    getSongsFromPlaylist
}