'use strict';
const config = require('./config');

//ticket schema
const ticket = config.mongo.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    email: String,
    amount: {
        type: Number,
        required: true
    },
    updated_at: Date,
    created_at: {
        type: Date,
        default: Date.now()
    }
});

//event schema
const eventSchema = config.mongo.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    venue: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    time: {
        type: Date,
        required: true
    },
    ticket: [ticket],
    updated_at: Date,
    created_at: {
        type: Date,
        default: Date.now()
    }
});

const Event = config.mongo.model('event', eventSchema);

module.exports = Event;