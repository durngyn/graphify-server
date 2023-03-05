const env = process.env

const encodeIdSecret = () => {
    const pair = `${env.SPOTIFY_CLIENT_ID}:${env.SPOTIFY_CLIENT_SECRET}`
    return Buffer.from(pair, "utf8").toString("base64")
}

module.exports = encodeIdSecret;