# graphify-server

Repo for main website: **https://github.com/bchh325/spotify-distribution** <br>
Backend to be used for **https://bchh325.github.io/spotify-distribution/**

## Technologies I'm planning to use
* React
* Express/Node.js (BFF Proxy / Auth Code Flow w/ PKCE)
* Spotify Web API
* Spotify Web Playback SDK
* WebSockets (Socket.io)
* MongoDB
* Deployment Options TBD

## Completed Tasks
* Authorization endpoint to redirect user to Spotify's authentication URL
* State comparisons before/after redirect and obtained auth_code
* Connected MongoDB for express-sessions
* Successfully exchanged auth_code and verifiers and stored access/refresh tokens in session on MongoDB, client also successfully recieves httpOnly session cookie
* Created controller function for requesting playlists from Spotify's Web API
* Created controller function for requesting list of songs given a playlist id
* Updated playlist and songs requests to gather more data past API limits per request (ex. num_playlists > 50 or num_songs in a playlist > 100)

## Planned Tasks (I always find something to add to this list)
* BFF Proxy for OAuth Flow as described here (https://datatracker.ietf.org/doc/html/draft-ietf-oauth-browser-based-apps#name-backend-for-frontend-bff-pr)
* Create controller function to handle refreshing access tokens
* Revoke sessions based on synchronized MongoDB session document time-to-live (TTL) and session cookie age or revoke on logout
* Create controller function to request batches of songs when playlist exceeds 100 songs
