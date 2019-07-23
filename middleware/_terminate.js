'use strict';
/**
 * terminates route process flow and handle errors
 */
const log = require('../log');

//error handler middleware
const errorHandler = (error, req, res, next) => {
    if (res.statusCode == 500) {
        log.error(`[FATAL :: ${req.reqID}]; ${req.url}; ${res.statusCode}; ${error}`);
        res.json({
            status: 'FATAL',
            time: new Date(),
            error: 'Internal server error.'
        });
    } else {
        log.error(`[FAILED :: ${req.reqID}]; ${req.url}; ${res.statusCode}; ${error.message}`);
        res.json({
            status: 'FAILED',
            time: new Date(),
            error: error.message
        });
    }
};

//terminate process
const terminate = (req, res) => {
    log.info(`[END :: ${req.reqID}]; ${req.url}; ${res.statusCode};`);
    res.status(200);
    res.json({
        status: 'OK',
        time: new Date(),
        data: req.body._data
    });
};

module.exports = [errorHandler, terminate];