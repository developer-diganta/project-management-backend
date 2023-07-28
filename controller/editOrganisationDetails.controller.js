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
        try{
        const organisation = await models.Organisation.findById(id).exec();
        //         for(x in editDetails){
            //             organisation[x]=editDetails[x];
        }
        await organisation.save();
        //         res.status(200).json({"message":"Details Updated!"});
    }catch(error){
                res.status(500).json({"message":"Internal Server Error"})
    }
}

module.exports = editOrganisationDetails;