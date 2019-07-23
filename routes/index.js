'use strict';
/**main entry point to app route */
const express = require('express'),
    route = express.Router(),
    cors = require('cors'),
    log = require('../log'),
    uuid = require('uuid');

//require entity middleware
const terminate = require('../middleware')._terminate,
    event = require('./event');

//configure route
route
    .use(cors())
    .use(express.json())
    .use(express.urlencoded({ extended: true }));

//log requests
route.use((req, res, next) => {
    req.reqID = uuid.v1();
    log.info(`[START :: ${req.reqID}]; ${req.url}; ${res.statusCode}`);
    next();
});

//open end-points
route
    .all('/', (req, res) => res.status(200).json({ 'status': 'OK', 'date': new Date() }))
    .use('/event', event)
    .use(terminate);

module.exports = route;