require('dotenv').config();

const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo');

const app = express({
});

app.use(session({
    cookie: {
        httpOnly: true,
        maxAge: 30 * 60 * 1000
    },
    secret: 'SECRET KEY',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
        mongoUrl: `mongodb+srv://graphifypassword:${process.env.MONGO_PASSWORD}@graphify.71ege8f.mongodb.net/graphify-db?retryWrites=true&w=majority`, //YOUR MONGODB URL
        ttl: 10,
        autoRemove: 'native'
    }),
    httpOnly: false
}));

app.get('/', (req, res) => {
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

app.listen(8888, () => {
    console.log("App listening on port 8888")
})