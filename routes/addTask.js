const express = require("express");

const router = express.Router();
const addTask = require("../controller/addTask.controller");

router.post('/addTask', addTask);

module.exports = router;