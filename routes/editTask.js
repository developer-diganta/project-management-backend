const express = require("express");

const router = express.Router();
const editTask = require("../controller/editTask.controller");

router.post('/editTask', editTask);

module.exports = router;