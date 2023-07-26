const express = require("express");

const router = express.Router();
const addOrganisation = require("../controller/addOrganisation.controller");

router.post('/addOrganisation',addOrganisation);

module.exports = router;