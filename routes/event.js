const router = require('express').Router(),
    controller = require('../controller').event;

router.use(controller);

module.exports = router;