const { model } = require("mongoose");
const models = require("../models/models");

const clearNotification = async(req,res) => {
    const {
        id,
        notification
    } = req.body;
    
    try{
        console.log({orgID:id})
        // const validate =
        // const organisation = await models. 
        const organisation = await models.Organisation.findById(id).exec();
        const notifications = organisation.notifications;
        notifications.splice(notification,1);
        organisation.notifications=notifications;
        organisation.save();
        const member = await models.Member.findById(id).exec();
        const notificationsMember = member.notifications;
        notificationsMember.splice(notification,1);
        member.notifications=notificationsMember;
        member.save();
        res.status(200).json({"notifications":organisation.notifications});
    }catch(error){
        console.log(error)
        res.status(500).json({"message":"Internal Server Error"})
    }
}


module.exports = clearNotification;