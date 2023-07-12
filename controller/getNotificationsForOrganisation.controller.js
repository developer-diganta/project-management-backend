const { model } = require("mongoose");
const models = require("../models/models");

const getNotificationsForOrganisation = async(req,res) => {
    const {
        id
    } = req.body;
    
    try{
        console.log({orgID:id})
        // const validate =
        // const organisation = await models. 
        const organisation = await models.Organisation.findById(id).exec();
        res.status(200).json({"notifications":organisation.notifications});
    }catch(error){
        console.log(error)
        res.status(500).json({"message":"Internal Server Error"})
    }
}


module.exports = getNotificationsForOrganisation;