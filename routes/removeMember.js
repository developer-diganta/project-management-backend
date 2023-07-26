const express = require("express");
const removeMember = require("../controller/removeMember.controller");
const author = require("../middlewares/verifyToken.middleware");

const router = express.Router();

router.post('/removeMember', author, removeMember);

module.exports = router;