require('dotenv').config();
const { model } = require("mongoose");
const models = require("../models/models");
const joi = require("../config/Joi");
const { OAuth2Client } = require('google-auth-library')
const client = new OAuth2Client(process.env.GOOGLE_CLIENTID)
const generateToken = require("../middlewares/generateToken.middleware")
const saltRounds = 10;
const bcrypt = require('bcrypt')
const editTask = async (req,res) => {
    const {
        id,
        toEdit
    } = req.body;

    try{
                // const validate = await joi.organisationSignUpSchema.validateAsync({ name,email,phoneNo,location,password });

        const task = await models.Task.findById(id).exec();
                if(!task){
            res.status(404).json({"message":"Invalid Id"});
            return;
        }
                const resp = await models.Task.findByIdAndUpdate(id,toEdit).exec();


        
        res.status(200).json({"message":"Task edited"})

    }catch(error){
                res.status(500).json("Internal Server Error");
    }
}

module.exports = editTask