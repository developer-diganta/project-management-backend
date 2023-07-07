const express = require("express");
const loginOrganisation = require("../controller/loginOrganisation.controller");

const router = express.Router();

router.post('/loginOrganisation', loginOrganisation);

module.exports = router;