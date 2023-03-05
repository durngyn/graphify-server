# graphify-server

Repo for main website: **https://github.com/bchh325/spotify-distribution** <br>
Backend to be used for **https://bchh325.github.io/spotify-distribution/**

## Technologies I'm planning to use
* Node.js
* Express
* Spotify Web API
* Spotify Web Playback SDK
* WebSockets (Socket.io)
* MongoDB
* Deployment Options TBD

## Completed Tasks
* Authorization endpoint to redirect user to Spotify's authentication URL
* State comparisons before/after redirect and obtained auth_code
* Connected MongoDB for express-sessions and storage of session cookie on the client

## Planned Tasks (I always find something to add to this list)
* BFF Proxy for OAuth Flow as described here (https://datatracker.ietf.org/doc/html/draft-ietf-oauth-browser-based-apps#name-backend-for-frontend-bff-pr)
* Create controller function for requesting access tokens with auth_code and code_verifier
* Create controller function for requesting resources from Spotify's Web API
* Create controller function to handle refreshing access tokens
