const axios = require('axios');
const { request } = require('http');
const querystring = require('querystring');

const generateSessionId = require('../helpers/generateSessionId')

const env = process.env

const createRedirect = (req, res) => {
    const scope = 'user-read-private user-read-email';
    const params = req.query
    console.log(params)

    const route = "/authorize"

    req.session.save(err => {
        if (err) {
            console.log(err);
        } else {
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
    });
}

const exchangeCode = (req, res) => {
    const params = req.query
}

module.exports = {
    createRedirect,
    exchangeCode
}