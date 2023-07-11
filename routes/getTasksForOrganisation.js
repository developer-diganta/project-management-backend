const express = require("express");

const router = express.Router();
const getTasksForOrganisation = require("../controller/getTasksForOrganisation.controller");

router.post('/getTasksForOrganisation', getTasksForOrganisation);

module.exports = router;