const express = require("express");

const router = express.Router();
const getTasksForOrganisation = require("../controller/getTasksForOrganisation.controller");
const author = require("../middlewares/verifyToken.middleware");

router.post('/getTasksForOrganisation', author, getTasksForOrganisation);

module.exports = router;