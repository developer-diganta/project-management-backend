const express = require("express");
const resetPasswordOfMember = require("../controller/resetPasswordOfMember.controller");
const author = require("../middlewares/verifyToken.middleware");

const router = express.Router();

router.post('/resetPasswordOfMember', author, resetPasswordOfMember);

module.exports = router;