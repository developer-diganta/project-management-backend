const express = require("express");

const router = express.Router();
const acceptInvitation = require("../controller/acceptInvitation.controller");
const author = require("../middlewares/verifyToken.middleware");

router.post('/acceptInvitation' ,acceptInvitation);

module.exports = router;