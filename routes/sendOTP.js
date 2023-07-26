const express = require("express");
const sendOTP = require("../controller/sendOtp.controller");

const router = express.Router();

router.post('/sendOTP', sendOTP);

module.exports = router;