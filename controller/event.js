'use strict';
const router = require('express').Router();

//require middleware
const _terminate = require('../middleware')._terminate

//require service
const service = require('../service').event;

const create = (req, res, next) => {
    const data = req.body._data;

    service.create(data)
        .then(response => {
            req.body._data = response;
            next();
        })
        .catch(error => {
            res.status(500);
            next(error);
        });
};

//open end-points
router
    //create item
    .post('/create', [create, _terminate]);

module.exports = router;