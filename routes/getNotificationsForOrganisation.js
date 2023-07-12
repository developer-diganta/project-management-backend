const express = require("express");

const router = express.Router();
const getNotificationsForOrganisation = require("../controller/getNotificationsForOrganisation.controller");
const author = require("../middlewares/verifyToken.middleware");

router.post('/getNotificationsForOrganisation', author ,getNotificationsForOrganisation);

module.exports = router;