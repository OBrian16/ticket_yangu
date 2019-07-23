'use strict';
/**configuration for data layer */
const mongo = require('mongoose'),
    env = require('dotenv').config().parsed;

class Data {
    constructor() {
        mongo.connect(env.MONGO_DB, {
            useNewUrlParser: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        this.mongo = mongo;
    }
}

module.exports = new Data();