const express = require("express");

const router = express.Router();
const getGitHubStats = require("../controller/getGitHubStats.controller");
const author = require("../middlewares/verifyToken.middleware");

router.post('/getGitHubStats', author ,getGitHubStats);

module.exports = router;