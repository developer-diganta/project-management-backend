const express = require("express");
const author = require("../middlewares/verifyToken.middleware");

const router = express.Router();
const deleteTask = require("../controller/deleteTask.controller");

router.post('/deleteTask', author, deleteTask);

module.exports = router;