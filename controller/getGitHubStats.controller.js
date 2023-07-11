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
const getGitHubStats = async (req,res) => {
    const {
        id
    } = req.body;

    try{
        
        // const validate = await joi.organisationSignUpSchema.validateAsync({ name,email,phoneNo,location,password });
       
        const task = await models.Task.findById(id).exec();
        const github = JSON.parse(task.github);
        const username = github.username;
        const repo = github.repo;
        const response = await axios.get(`http://api.github.com/repos/${username}/${repo}`);
        console.log(response)
        res.status(200).json(response.data)
    }catch(error){
        console.log(error)
        res.status(500).json("Internal Server Error");
    }
}

module.exports = getGitHubStats