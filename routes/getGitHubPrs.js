const express = require("express");

const router = express.Router();
const getGitHubPrs = require("../controller/getGitHubPrs.controller");
const author = require("../middlewares/verifyToken.middleware");

router.post('/getGitHubPrs', author ,getGitHubPrs);

module.exports = router;