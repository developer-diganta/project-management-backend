const express = require("express");

const router = express.Router();
const getMemberDetails = require("../controller/getMemberDetails.controller");

router.post('/getMemberDetails', getMemberDetails);

module.exports = router;