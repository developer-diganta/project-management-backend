const { model } = require("mongoose");
const models = require("../models/models");

const rejectInvitation = async(req,res) => {
    const {
        id,
        orgEmail
    } = req.body;
    
    try{
        // const validate =
        // const organisation = await models. 
                    const member = await models.Member.findById(id).exec();
                if(!member){
            res.status(404).json({"message":"Member not found"});
            return;
        }

        const pendingInvitations = member.pendingOrgId;
       pendingInvitations.splice(pendingInvitations.indexOf(orgEmail),1);
       member.pendingOrgId = pendingInvitations
       await member.save()
       res.status(200).json({"message":"Invitation Removed"})
    }catch(error){
                res.status(500).json({"message":"Internal Server Error"})
    }
}


module.exports = rejectInvitation;