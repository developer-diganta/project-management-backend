require('dotenv').config();
const { model } = require("mongoose");
const models = require("../models/models");
const joi = require("../config/Joi");
const { OAuth2Client } = require('google-auth-library')
const client = new OAuth2Client(process.env.GOOGLE_CLIENTID)
const generateToken = require("../middlewares/generateToken.middleware")
const saltRounds = 10;
const bcrypt = require('bcrypt')
const moveTask = async (req,res) => {
    const {
        id,
        status
    } = req.body;

    try{
        
        // const validate = await joi.organisationSignUpSchema.validateAsync({ name,email,phoneNo,location,password });
       
        const task = await models.Task.findById(id).exec();
        if(!task.length){
            res.status(404).json({"message":"Task Not Found"});
            return;
        }
        task.status = status;
        task.save();
        res.status(200).json({"message":"Task moved"})

    }catch(error){
        console.log(error)
        res.status(500).json("Internal Server Error");
    }
}

module.exports = moveTask