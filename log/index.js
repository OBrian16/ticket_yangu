'use strict';
const { createLogger, format, transports } = require('winston'),
    path = require('path');

const logger = createLogger({
    transports: [
        new transports.Console(),
        //'info' logs transporter
        new transports.File({
            level: 'info',
            filename: path.join(__dirname, 'info.log'),
            format: format.combine(
                format.colorize(),
                format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
                format.printf(info => `${info.timestamp} :: ${info.message}`)
            )
        }),
        //'error' logs transporter
        new transports.File({
            level: 'error',
            filename: path.join(__dirname, 'error.log'),
            format: format.combine(
                format.colorize(),
                format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
                format.printf(info => `${info.timestamp} :: ${info.message}`)
            )
        })
    ]
});

module.exports = logger;
