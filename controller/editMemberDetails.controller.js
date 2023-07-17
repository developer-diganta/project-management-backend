const { model } = require("mongoose");
const models = require("../models/models");
const joi = require("../config/Joi");
var sanitize = require('mongo-sanitize');
const editMemberDetails = async (req,res) => {
    const {
        id,
        editDetails
    } = req.body;

    try{
        const member = await models.Member.findById(id).exec();
        console.log({member})
        for(x in editDetails){
            console.log(member[x])
            member[x]=editDetails[x];
        }
        await member.save();
        console.log({member})
        res.status(200).json({"message":"Details Updated!"});
    }catch(error){
        console.log(error)
        res.status(500).json({"message":"Internal Server Error"})
    }
}

module.exports = editMemberDetails;