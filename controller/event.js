'use strict';
const router = require('express').Router();

//require service
const {
    create,
    read,
    readMany,
    search,
    update,
    remove
} = require('../service').event;

//open end-points
router.post('/create', [create]); //create
router.get('/read/:id', [read(true)]); //read
router.post('/read-many', [readMany(true)]); //read many
router.post('/search', [search(true)]); //search
router.post('/update/:id', [update]); //update
router.get('/remove/:id', [remove]); //remove

module.exports = router;