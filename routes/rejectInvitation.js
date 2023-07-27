const express = require("express");

const router = express.Router();
const rejectInvitation = require("../controller/rejectInvitation.controller");
const author = require("../middlewares/verifyToken.middleware");

router.post('/rejectInvitation' , author, rejectInvitation);

module.exports = router;