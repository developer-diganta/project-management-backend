const express = require("express");
const author = require("../middlewares/verifyToken.middleware");

const router = express.Router();
const editMemberDetails = require("../controller/editMemberDetails.controller");

router.post('/editMemberDetails', author, editMemberDetails);

module.exports = router;