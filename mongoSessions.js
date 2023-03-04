const session = require('express-session');
const MongoStore = require('connect-mongo');

const sessionExport = session({
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
    })
})

module.exports = sessionExport;