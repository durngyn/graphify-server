const crypto = require("crypto")

const generateSessionId = () => {
    return crypto.randomBytes(16).toString('base64');
}

module.exports = generateSessionId;