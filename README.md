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
* Create controller function for requesting playlists from Spotify's Web API

## Planned Tasks (I always find something to add to this list)
* BFF Proxy for OAuth Flow as described here (https://datatracker.ietf.org/doc/html/draft-ietf-oauth-browser-based-apps#name-backend-for-frontend-bff-pr)
* Create controller function to handle refreshing access tokens
* Revoke sessions based on synchronized MongoDB session document time-to-live (TTL) and session cookie age or revoke on logout
