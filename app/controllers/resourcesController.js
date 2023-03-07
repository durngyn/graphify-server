const axios = require('axios');

const env = process.env

const getPlaylists = async (req, res) => {
    const route = "/v1/me/playlists"

    let options = {
        method: 'get',
        url: env.SPOTIFY_WEB_API_URI + route,
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + req.session.access_token
        }, 
        params: {
            limit: 50,
            offset: 0
        }
    }

    let allPlaylists = null
    let playlists = await axios(options)

    allPlaylists = playlists.data.items
    
    while (playlists.data.next !== null) {
        const params = new URL(playlists.data.next)
        options.params.offset = params.searchParams.get("offset")

        playlists = await axios(options)
        allPlaylists = allPlaylists.concat(playlists.data.items)
    }    

    res.send(allPlaylists)
}

const getSongsFromPlaylist = async (req, res) => {
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

    let allSongs = null
    let songs = await axios(options)

    allSongs = songs.data.items
    
    while (songs.data.next !== null) {
        const params = new URL(songs.data.next)
        options.params.offset = params.searchParams.get("offset")

        songs = await axios(options)
        allSongs = allSongs.concat(songs.data.items)
    }    

    res.send(allSongs)
}

const getMultipleArtists = async (req, res) => {
    const batches = req.body.batches
    const route = "/v1/artists"

    let options = {
        method: 'get',
        url: env.SPOTIFY_WEB_API_URI + route,
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + req.session.access_token
        },
        params: {
        }
    }

    let allArtists = []

    for (let i = 0; i < batches.length; i++) {
        console.log(`Batch ${i + 1}: ${(batches[i])} \n`)
        options.params.ids = batches[i]

        const batchRes = await axios(options)
        console.log(batchRes.data)
        
        allArtists = allArtists.concat(batchRes.data.artists)
    } 

    res.send(allArtists)
}

module.exports = {
    getPlaylists,
    getSongsFromPlaylist,
    getMultipleArtists
}