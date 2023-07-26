const express = require("express");
const author = require("../middlewares/verifyToken.middleware");

const router = express.Router();
const addTask = require("../controller/addTask.controller");

router.post('/addTask', author,addTask);

module.exports = router;