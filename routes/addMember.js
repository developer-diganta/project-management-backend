const express = require("express");

const router = express.Router();
const addMember = require("../controller/addMember.controller");
const author = require("../middlewares/verifyToken.middleware");

router.post('/addMember', author ,addMember);

module.exports = router;