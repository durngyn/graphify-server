const axios = require('axios');
const { request } = require('http');
const querystring = require('querystring');

const encodeIdSecret = require('../helpers/encodeIdSecret')

const env = process.env

const createRedirect = (req, res) => {
    const scope = 'playlist-read-private streaming';
    const params = req.query

    const route = "/authorize"

    res.send(env.SPOTIFY_ACCOUNTS_URI + route + '?' +
        querystring.stringify({
            response_type: 'code',
            client_id: env.SPOTIFY_CLIENT_ID,
            scope: scope,
            redirect_uri: env.REDIRECT_URI,
            state: params.auth_state,
            show_dialog: true,
            code_challenge_method: 'S256',
            code_challenge: params.code_challenge
        }));

}

const exchangeCode = (req, res) => {
    const route = "/api/token"
    const data = req.body

    const options = {
        method: 'post',
        url: env.SPOTIFY_ACCOUNTS_URI + route,
        headers: {
            "Authorization": "Basic " + encodeIdSecret(),
            "Content-Type": "application/x-www-form-urlencoded"
        },
        data: {
            grant_type: "authorization_code",
            code: data.code,
            redirect_uri: env.REDIRECT_URI,
            client_id: env.SPOTIFY_CLIENT_ID,
            code_verifier: data.code_verifier
        }
    }

    axios(options)
        .then(data => {
            const tokens = data.data
            console.log(tokens)
            req.session.access_token = tokens.access_token
            req.session.refresh_token = tokens.refresh_token
            req.session.save(err => {
                if (err) {
                    console.log(err)
                } else {
                    res.send("success")
                }
            })
        })
        .catch(err => console.log(err))
}

module.exports = {
    createRedirect,
    exchangeCode
}