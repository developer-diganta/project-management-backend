const { model } = require("mongoose");
const models = require("../models/models");
const joi = require("../config/Joi");
var sanitize = require('mongo-sanitize');
const editOrganisationDetails = async (req,res) => {
    const {
        unsanitisedId,
        editDetails
    } = req.body;
    const id = sanitize(unsanitisedId);
    console.log(id)
    try{
        const organisation = await models.Organisation.findById(id).exec();
        console.log({organisation})
        for(x in editDetails){
            console.log(organisation[x])
            organisation[x]=editDetails[x];
        }
        await organisation.save();
        console.log({organisation})
        res.status(200).json({"message":"Details Updated!"});
    }catch(error){
        console.log(error)
        res.status(500).json({"message":"Internal Server Error"})
    }
}

module.exports = editOrganisationDetails;