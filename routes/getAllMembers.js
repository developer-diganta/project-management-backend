const express = require("express");

const router = express.Router();
const getAllMembers = require("../controller/getAllMembers.controller");
const author = require("../middlewares/verifyToken.middleware");

router.post('/getAllMembers' ,getAllMembers);

module.exports = router;