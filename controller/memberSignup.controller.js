require('dotenv').config();
const { model } = require("mongoose");
const models = require("../models/models");
const joi = require("../config/Joi");
const { OAuth2Client } = require('google-auth-library')
const client = new OAuth2Client(process.env.GOOGLE_CLIENTID)
const generateToken = require("../middlewares/generateToken.middleware")
const saltRounds = 10;
const bcrypt = require('bcrypt')
const memberSignup = async (req,res) => {
    const {
        name,
        email,
        phoneNo,
        password,
        receivedOtp
    } = req.body;

    try{
        
        // const validate = await joi.memberSignUpSchema.validateAsync({ name,email,phoneNo,password });
        bcrypt.hash(password, saltRounds, async (err, hash) => {

            const member = await models.Member.find({ $or: [{email:email},{phoneNo:phoneNo}]}).exec();
                                    if(member.length){
                res.status(200).json({"message":"Member already exists"});
                return;
            }
            const otp = await models.OTP.find({otp:receivedOtp}).exec();
            if(!otp[0] || otp[0].otp!==receivedOtp || otp[0].email!==email){
                res.status(200).json({"message":"401"})
                return;
            }
            await models.OTP.deleteMany({email:email}).exec();

            const newMember = new models.Member({
                name: name,
                phoneNo: phoneNo,
                email: email,
                password:hash,
                orgId:null,
                tasks:[],
                notifications:[],
                meeting:[],
                pendingOrgId:[]
            });
    
            newMember.save();
            const token = generateToken(email);
            res.status(200).json({token:token, id:newMember._id, email:email})
        })


    }catch(error){
                res.status(500).json("Internal Server Error");
    }
}

module.exports = memberSignup