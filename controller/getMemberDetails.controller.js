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
const getMemberDetails = async (req,res) => {
    const {
        id
    } = req.body;

    try{
        
        // const validate = await joi.organisationSignUpSchema.validateAsync({ name,email,phoneNo,location,password });
       
      const member = await models.Member.findById(id).exec();
      res.status(200).json({member});
      return;
    }catch(error){
        console.log(error)
        res.status(500).json("Internal Server Error");
    }
}

module.exports = getMemberDetails