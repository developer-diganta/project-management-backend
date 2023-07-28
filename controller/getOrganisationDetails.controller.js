const { model } = require("mongoose");
const models = require("../models/models");
const joi = require("../config/Joi");
var sanitize = require('mongo-sanitize');
const getOrganisationDetails = async (req,res) => {
    const {
        unsanitisedId
    } = req.body;
    const id = sanitize(unsanitisedId);
        try{
        const organisation = await models.Organisation.findById(id).exec();
        res.status(200).json(organisation);
    }catch(error){
        res.status(500).json({"message":"Internal Server Error"})
    }
}

module.exports = getOrganisationDetails;