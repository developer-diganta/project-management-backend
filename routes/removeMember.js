const express = require("express");
const removeMember = require("../controller/removeMember.controller");

const router = express.Router();

router.post('/removeMember', removeMember);

module.exports = router;