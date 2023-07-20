const express = require("express");

const router = express.Router();
const getNotificationsForMember = require("../controller/getNotificationsForMember.controller");
const author = require("../middlewares/verifyToken.middleware");

router.post('/getNotificationsForMember', author ,getNotificationsForMember);

module.exports = router;