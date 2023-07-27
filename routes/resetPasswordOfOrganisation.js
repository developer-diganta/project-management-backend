const express = require("express");
const resetPasswordOfOrganisation = require("../controller/resetPasswordOfOrganisation.controller");

const router = express.Router();

router.post('/resetPasswordOfOrganisation', resetPasswordOfOrganisation);

module.exports = router;