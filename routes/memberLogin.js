const express = require("express");
const memberLogin = require("../controller/memberLogin.controller");

const router = express.Router();

router.post('/memberLogin', memberLogin);

module.exports = router;