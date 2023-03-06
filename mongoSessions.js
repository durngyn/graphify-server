const session = require('express-session');
const MongoStore = require('connect-mongo');

const sessionExport = session({
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        maxAge: 3600 * 1000
    },
    secret: 'SECRET KEY',
    resave: false,
    store: MongoStore.create({
        mongoUrl: `mongodb+srv://graphifypassword:${process.env.MONGO_PASSWORD}@graphify.71ege8f.mongodb.net/graphify-db?retryWrites=true&w=majority`, //YOUR MONGODB URL
        ttl: 3600,
        autoRemove: 'native',
        autoRemoveInterval: 2
    })
})

module.exports = sessionExport;