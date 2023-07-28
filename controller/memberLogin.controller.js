require('dotenv').config();
const { model } = require("mongoose");
const models = require("../models/models");
const joi = require("../config/Joi");
const { OAuth2Client } = require('google-auth-library')
const client = new OAuth2Client(process.env.GOOGLE_CLIENTID)
const generateToken = require("../middlewares/generateToken.middleware")
const saltRounds = 10;
const bcrypt = require('bcrypt')
const memberLogin = async (req,res) => {
    const {
        email,
        password
    } = req.body;

    try{
        
        // const validate = await joi.organisationLoginSchema.validateAsync({ email,password });
        const member = await models.Member.findOne({email:email}).exec();
                        if(!member){
                        res.status(404).json({"message":"Not Found"});
            return;
        }
        bcrypt.compare(password, member.password, (error,result) =>
        {
                                    if(!result){
                res.status(401).json({"message":"Unauthorized"})
                return;
            }
            const token = generateToken(email);
            res.status(200).json({token:token, id:member._id, email:email, name: member.name, phoneNo: member.phoneNo, orgId:member.orgId})
        })

    }catch(error){
                res.status(500).json("Internal Server Error");
    }
}

module.exports = memberLogin