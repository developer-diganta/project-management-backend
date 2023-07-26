const express = require("express");
const author = require("../middlewares/verifyToken.middleware");

const router = express.Router();
const editOrganisationDetails = require("../controller/editOrganisationDetails.controller");

router.patch('/editOrganisationDetails', author,editOrganisationDetails);

module.exports = router;