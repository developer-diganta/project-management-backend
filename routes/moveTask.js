const express = require("express");
const moveTask = require("../controller/moveTask.controller");

const router = express.Router();

router.post('/moveTask', moveTask);

module.exports = router;