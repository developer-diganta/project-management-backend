const express = require("express");

const router = express.Router();
const clearNotification = require("../controller/clearNotification.controller");

router.post('/clearNotification', clearNotification);

module.exports = router;