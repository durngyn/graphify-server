const createRedirect = (req, res) => {
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
}

module.exports = {
    testController
}