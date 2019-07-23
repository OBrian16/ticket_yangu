'use strict';
/**event service */
const mongo = require('../data').mongo.event;

class Event {
    //create new event
    create(data) {
        return new Promise((resolve, reject) => {
            const event = new mongo(data);
            event.save(event)
                .then(() => resolve(true))
                .catch(error => reject(error));
        });
    }
}

module.exports = new Event();