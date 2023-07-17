const express = require("express");

const router = express.Router();
const editMemberDetails = require("../controller/editMemberDetails.controller");

router.post('/editMemberDetails', editMemberDetails);

module.exports = router;