'use strict';
/**event service layer */
const mongo = require('../data').mongo.event,
    fuse = require('fuse.js');

//create
module.exports.create = (req, res, next) => {
    const _data = req.body._data;

    const event = new mongo(_data);
    event.save()
        .then(() => {
            req.body._data = true;
            next();
        })
        .catch(error => {
            res.status(500);
            next(error);
        });
};

//read
module.exports.read = (admin = false) => {
    let select = ['-ticket'];
    if (admin) select = [];

    return (req, res, next) => {
        const id = req.params.id;

        mongo.findById(id).lean().select(select)
            .then(response => {
                if (!response) throw new Error(404);
                req.body._data = response;
                next();
            })
            .catch(error => {
                if (error.message == '404') {
                    res.status(404);
                    next(new Error(`Event not found.`));
                } else {
                    res.status(500);
                    next(error);
                }
            });
    };
};

//read many
module.exports.readMany = (admin) => {
    let select = ['-ticket'];
    if (admin) select = [];

    return (req, res, next) => {
        const body = req.body,
            skip = body.skip ? Number(body.skip) : null,
            limit = body.limit ? Number(body.limit) : null;

        mongo.find({}).lean().select(select).skip(skip).limit(limit)
            .then(response => {
                req.body._data = response;
                next();
            })
            .catch(error => {
                res.status(500);
                next(error);
            });
    };
};

//search
module.exports.search = (admin = false) => {
    let select = ['-ticket'];
    if (admin) select = [];

    return (req, res, next) => {
        const body = req.body,
            search = body._data.search.trim(),
            skip = body.skip ? Number(body.skip) : null,
            limit = body.limit ? Number(body.limit) : null;

        mongo.find({}).lean().select(select).skip(skip).limit(limit)
            .then(response => {
                let data = new fuse(response, { keys: ['title', 'description', 'venue'] });
                req.body._data = data.search(search);
                next();
            })
            .catch(error => {
                res.status(500);
                next(error);
            });
    };
};

//update
module.exports.update = (req, res, next) => {
    const id = req.params.id,
        data = req.body._data;

    //update time
    Object.assign(data, { updated_at: new Date() });

    mongo.findOneAndUpdate({ _id: id }, data)
        .then(() => {
            req.body._data = true;
            next();
        })
        .catch(error => {
            res.status(500);
            next(error);
        });
};

//remove
module.exports.remove = (req, res, next) => {
    const id = req.params.id;

    mongo.findByIdAndRemove({ _id: id })
        .then(() => {
            req.body._data = true;
            next();
        })
        .catch(error => {
            res.status(500);
            next(error);
        });
};