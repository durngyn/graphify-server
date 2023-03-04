const express = require('express');
const router = express.Router();

//Authorization endpoints for token exchange and logging in to Spotify

router.get("/authorize", (req, res) => {
    console.log(req.session ? "session exists" : "false")
    req.session.user = {
        uuid: '12234-2345-2323423'
    }
    req.session.save(err => {
        if (err) {
            console.log(err);
        } else {
            res.send(req.session.user)
        }
    });
})

router.post("/exchange-code", (req, res) => {
    res.send("exchange code")
})

module.exports = router;