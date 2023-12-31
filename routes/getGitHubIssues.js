const express = require("express");

const router = express.Router();
const getGitHubIssues = require("../controller/getGitHubIssues.controller");
const author = require("../middlewares/verifyToken.middleware");

router.post('/getGitHubIssues', author ,getGitHubIssues);

module.exports = router;