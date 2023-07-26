const express = require("express");

const router = express.Router();
const getMemberDetails = require("../controller/getMemberDetails.controller");
const author = require("../middlewares/verifyToken.middleware");

router.post('/getMemberDetails', author, getMemberDetails);

module.exports = router;