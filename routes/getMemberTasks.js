const express = require("express");

const router = express.Router();
const getMemberTasks = require("../controller/getMemberTasks.controller");
const author = require("../middlewares/verifyToken.middleware");

router.post('/getMemberTasks', author, getMemberTasks);

module.exports = router;