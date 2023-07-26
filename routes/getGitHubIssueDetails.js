const express = require("express");

const router = express.Router();
const getGitHubIssueDetails = require("../controller/getGitHubIssueDetails.controller");
const author = require("../middlewares/verifyToken.middleware");

router.post('/getGitHubIssueDetails', author ,getGitHubIssueDetails);

module.exports = router;