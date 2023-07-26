const express = require("express");

const router = express.Router();
const acceptInvitation = require("../controller/acceptInvitation.controller");
const author = require("../middlewares/verifyToken.middleware");

router.post('/acceptInvitation' , author, acceptInvitation);

module.exports = router;