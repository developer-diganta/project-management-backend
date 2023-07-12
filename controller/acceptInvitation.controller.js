const { model } = require("mongoose");
const models = require("../models/models");

const acceptInvitation = async(req,res) => {
    const {
        id,
        organisationId
    } = req.body;
    
    try{
        // const validate =
        // const organisation = await models. 

        const member = await models.Member.findById(id).exec();
        console.log(member)
        if(!member){
            res.status(404).json({"message":"Member not found"});
            return;
        }

        const pendingInvitations = member.pendingOrgId;
        if(!pendingInvitations.includes(organisationId)){
            res.status(401).json({"message":"Forbidden Resource"});
            return;
        }
        member.orgId = organisationId;
        member.pendingOrgId = [];
        await member.save();
        const organisation = await models.Organisation.findById(organisationId).exec();
        const organisationNotifications = organisation.notifications;
        organisationNotifications.push("Member Invitation Accepted");
        organisation.notifications=organisationNotifications;
        await organisation.save();
        res.status(200).json({"message":"Invitation Accepted"})
    }catch(error){
        console.log(error)
        res.status(500).json({"message":"Internal Server Error"})
    }
}


module.exports = acceptInvitation;