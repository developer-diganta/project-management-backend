const express = require("express");
const author = require("../middlewares/verifyToken.middleware");

const router = express.Router();
const clearNotification = require("../controller/clearNotification.controller");

router.post('/clearNotification', author, clearNotification);

module.exports = router;