require('dotenv').config();
const { model } = require("mongoose");
const models = require("../models/models");
const joi = require("../config/Joi");
const { OAuth2Client } = require('google-auth-library')
const client = new OAuth2Client(process.env.GOOGLE_CLIENTID)
const generateToken = require("../middlewares/generateToken.middleware")
const saltRounds = 10;
const bcrypt = require('bcrypt')
const loginOrganisation = async (req,res) => {
    const {
        email,
        password
    } = req.body;

    try{
        
        const validate = await joi.organisationLoginSchema.validateAsync({ email,password });
        const organisation = await models.Organisation.findOne({email:email}).exec();
        console.log(organisation)
        console.log("HERE")
        if(!organisation){
            res.status(404).json({"message":"Not Found"});
            return;
        }
        bcrypt.compare(password, organisation.password, (error,result) =>
        {
            console.log("a")
            console.log(result)
            if(!result){
                res.status(401).json({"message":"Unauthorized"})
                return;
            }
            const token = generateToken(email);
            res.status(200).json({token:token, id:organisation._id, email:email, name: organisation.name, phoneNo: organisation.phoneNo})
        })

    }catch(error){
        console.log(error)
        res.status(500).json("Internal Server Error");
    }
}

module.exports = loginOrganisation