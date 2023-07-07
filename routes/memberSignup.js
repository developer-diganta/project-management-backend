const express = require("express");

const router = express.Router();
const memberSignup = require("../controller/memberSignup.controller");
const author = require("../middlewares/verifyToken.middleware");

router.post('/memberSignup', memberSignup);

module.exports = router;