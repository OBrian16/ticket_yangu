'use strict';
/**
 * main entry point to this app
 */
const env = require('dotenv').config().parsed,
    log = require('./log'),
    express = require('express'),
    app = express(),
    port = env.PORT || 7000; //port to listen to

//require route (all end-points)
const routes = require('./routes');

//open all end-points
app.use(routes);

app.listen(port, error => {
    if (error) log.error(error);
    log.info(`Server is listening on port (${port})`);
});