const express = require("express");

const router = express.Router();
const editOrganisationDetails = require("../controller/editOrganisationDetails.controller");

router.patch('/editOrganisationDetails', editOrganisationDetails);

module.exports = router;