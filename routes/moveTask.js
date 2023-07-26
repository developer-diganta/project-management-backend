const express = require("express");
const moveTask = require("../controller/moveTask.controller");
const author = require("../middlewares/verifyToken.middleware");

const router = express.Router();

router.post('/moveTask', author, moveTask);

module.exports = router;