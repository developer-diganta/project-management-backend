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

                if(!username || !repo){
            res.status(200).json({})
            return;
        }

        const response = await axios.get(`http://api.github.com/repos/${username}/${repo}/pulls?issue=${number}`);
        //         // response.data.pr=PR;
        //         res.status(200).json(response.data)
        //     }catch(error){
                res.status(500).json("Internal Server Error");
    }
}

module.exports = getGitHubPrs;