const { model } = require("mongoose");
const models = require("../models/models");

const getNotificationsForMember = async(req,res) => {
    const {
        id
    } = req.body;
    
    try{
        console.log({orgID:id})
        // const validate =
        // const Member = await models. 
        const member = await models.Member.findById(id).exec();
        console.log(member.notifications)
        res.status(200).json({"notifications":member.notifications});
    }catch(error){
        console.log(error)
        res.status(500).json({"message":"Internal Server Error"})
    }
}


module.exports = getNotificationsForMember;