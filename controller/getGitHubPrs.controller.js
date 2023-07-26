require('dotenv').config();
const { model } = require("mongoose");
const models = require("../models/models");
const joi = require("../config/Joi");
const { OAuth2Client } = require('google-auth-library')
const client = new OAuth2Client(process.env.GOOGLE_CLIENTID)
const generateToken = require("../middlewares/generateToken.middleware")
const saltRounds = 10;
const bcrypt = require('bcrypt');
const { default: axios } = require('axios');
const getGitHubPrs = async (req,res) => {
    const {
        username,
        repo,
        number
    } = req.body;

    try{

        console.log(req.body)
        if(!username || !repo){
            res.status(200).json({})
            return;
        }

        const response = await axios.get(`http://api.github.com/repos/${username}/${repo}/pulls?issue=${number}`);
        // console.log("PR",prs.data)
        // response.data.pr=PR;
        // console.log(response.data.issue_pull_requests)
        res.status(200).json(response.data)
        // console.log(response)
    }catch(error){
        console.log(error)
        res.status(500).json("Internal Server Error");
    }
}

module.exports = getGitHubPrs;