'use strict';
const router = require('express').Router();

//require service
const {
    create,
    read,
    readMany,
    search,
    update,
    remove,
    createTicket,
    readTicket,
    readManyTickets,
    searchTicket,
    updateTicket,
    removeTicket
} = require('../service').event;

//open end-points
router.post('/create', [create]); //create
router.get('/read/:id', [read(true)]); //read
router.post('/read-many', [readMany(true)]); //read many
router.post('/search', [search(true)]); //search
router.post('/update/:id', [update]); //update
router.get('/remove/:id', [remove]); //remove

router.post('/ticket/create/:id', [createTicket]); //create ticket
router.get('/ticket/read/:id/:ticket_id', [readTicket]); //read ticket
router.post('/ticket/read-many/:id', [readManyTickets]); //read many tickets
router.post('/ticket/search/:id', [searchTicket]); //search ticket
router.post('/ticket/update/:id/:ticket_id', [updateTicket]); //update ticket
router.get('/ticket/remove/:id/:ticket_id', [removeTicket]); //remove ticket

module.exports = router;