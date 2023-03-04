require('dotenv').config();

const express = require('express')

const app = express()

const sessionExport = require('./mongoSessions');
const authorizeRoutes = require('./app/routes/authorize');
const resourcesRoutes = require('./app/routes/resources');

app.use(sessionExport);
app.use('/user', authorizeRoutes)
app.use('/data', resourcesRoutes)

module.exports = app;