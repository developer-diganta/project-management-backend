require('dotenv').config();
const { model } = require("mongoose");
const models = require("../models/models");
const joi = require("../config/Joi");
const { OAuth2Client } = require('google-auth-library')
const client = new OAuth2Client(process.env.GOOGLE_CLIENTID)
const generateToken = require("../middlewares/generateToken.middleware")
const saltRounds = 10;
const bcrypt = require('bcrypt')
const addOrganisation = async (req,res) => {
    const {
        name,
        phoneNo,
        email,
        location,
        password
    } = req.body;

    try{
        
        const validate = await joi.organisationSignUpSchema.validateAsync({ name,email,phoneNo,location,password });
        bcrypt.hash(password, saltRounds, async (err, hash) => {
            const organisation = await models.Organisation.find({email:email}).exec();
        
            if(organisation.length){
                res.status(401).json({"message":"Organisation already exists"});
                return;
            }
    
            const newOrganisation = new models.Organisation({
                name: name,
                phoneNo: phoneNo,
                email: email,
                location: location,
                password:hash
            });
    
            newOrganisation.save();
            const token = generateToken(email);
            res.status(200).json({token:token, id:newOrganisation._id, email:email})
        })


    }catch(error){
        console.log(error)
        res.status(500).json("Internal Server Error");
    }
}

module.exports = addOrganisation