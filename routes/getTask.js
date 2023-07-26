const express = require("express");

const router = express.Router();
const getTask = require("../controller/getTasks.controller");
const author = require("../middlewares/verifyToken.middleware");

router.post('/getTask' , author, getTask);

module.exports = router;