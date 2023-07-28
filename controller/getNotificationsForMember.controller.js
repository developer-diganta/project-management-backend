const { model } = require("mongoose");
const models = require("../models/models");

const getNotificationsForMember = async(req,res) => {
    const {
        id
    } = req.body;
    
    try{
                // const validate =
        // const Member = await models. 
        const member = await models.Member.findById(id).exec();
                res.status(200).json({"notifications":member.notifications});
    }catch(error){
                res.status(500).json({"message":"Internal Server Error"})
    }
}


module.exports = getNotificationsForMember;