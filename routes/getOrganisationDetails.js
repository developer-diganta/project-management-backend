const express = require("express");

const router = express.Router();
const getOrganisationDetails = require("../controller/getOrganisationDetails.controller");

router.post('/getOrganisationDetails', getOrganisationDetails);

module.exports = router;