require('dotenv').config();
const { model } = require("mongoose");
const models = require("../models/models");
const joi = require("../config/Joi");
const { OAuth2Client } = require('google-auth-library')
const client = new OAuth2Client(process.env.GOOGLE_CLIENTID)
const generateToken = require("../middlewares/generateToken.middleware")
const saltRounds = 10;
const bcrypt = require('bcrypt')
const getAllMembers = async (req,res) => {
    const {
        id
    } = req.body;

    try{
        
        const members = await models.Member.find({orgId:id}).select('_id name email phoneNo tasks').exec();
        console.log(members)
        res.status(200).json({members})

    }catch(error){
        console.log(error)
        res.status(500).json("Internal Server Error");
    }
}

module.exports = getAllMembers