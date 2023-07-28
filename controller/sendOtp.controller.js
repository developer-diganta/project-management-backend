require('dotenv').config();
const { model } = require("mongoose");
const models = require("../models/models");
const joi = require("../config/Joi");
const { OAuth2Client } = require('google-auth-library')
const client = new OAuth2Client(process.env.GOOGLE_CLIENTID)
const generateToken = require("../middlewares/generateToken.middleware")
const saltRounds = 10;
const bcrypt = require('bcrypt');
const otpGenerator = require('../utils/otpGenerator');
const mailSender = require('../utils/mailSender');
const sendOtp = async (req,res) => {
    const {
        email
    } = req.body;

    try{
        
        const otp = otpGenerator(email);
        await models.OTP.deleteMany({email:email}).exec();
        const newOTP = new models.OTP({
            otp:otp,
            email:email
        });
        await newOTP.save();
        mailSender(email,"ManagD OTP for Login","",`
        <p>Your One Time Password(OTP) for your ManagD Account is <i><u>${otp}</u></i>. Please note that this OTP is valid only for 10 minutes! <b>Please DO NOT share this OTP with anyone<b> We are excited to see you at ManagD!<br/> <i style="font-size:14px">Not related or did not send any request? Please ignore this email</i></p>
        `)
        res.status(200).json({otp});

    }catch(error){
        console.log("PP")
        console.log(error)
        res.status(500).json("Internal Server Error");
    }
}

module.exports = sendOtp