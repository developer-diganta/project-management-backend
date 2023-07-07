const { model } = require("mongoose");
const models = require("../models/models");

const addMember = async(req,res) => {
    const {
        memberList,
        id,
        email
    } = req.body;

    try{
        // const validate =
        // const organisation = await models. 

        for(let i=0;i<memberList.length;i++){
            const memberEmail = memberList[i];
            const member = await models.Member.findOne({email:memberEmail}).exec();
            if(!member){
                continue;
                // res.status(404).json({"message":"Member Not Found"})
            }
            const pendingInvitations = member.pendingOrgId;
            pendingInvitations.push(id);
            member.pendingOrgId=pendingInvitations;
            const notifications=member.notifications;
            notifications.push('Invitation');
            member.notifications=notifications;
            member.save();
        }
        res.status(200).json({"message":"Sent Invitations to valid members"})
    }catch(error){
        console.log(error)
        res.status(500).json({"message":"Internal Server Error"})
    }
}


module.exports = addMember;