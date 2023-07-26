const express = require("express");

const router = express.Router();
const getOrganisationDetails = require("../controller/getOrganisationDetails.controller");
const author = require("../middlewares/verifyToken.middleware");

router.post('/getOrganisationDetails', author, getOrganisationDetails);

module.exports = router;