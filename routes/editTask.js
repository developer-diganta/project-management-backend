const express = require("express");
const author = require("../middlewares/verifyToken.middleware");

const router = express.Router();
const editTask = require("../controller/editTask.controller");

router.post('/editTask', author,editTask);

module.exports = router;