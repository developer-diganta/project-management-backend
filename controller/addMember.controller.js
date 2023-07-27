const { model } = require("mongoose");
const models = require("../models/models");
const mailSender = require("../utils/mailSender")
const addMember = async(req,res) => {
    const {
        memberList,
        id,
        email
    } = req.body;
    
    try{

        for(let i=0;i<memberList.length;i++){
            const memberEmail = memberList[i];
            const member = await models.Member.findOne({email:memberEmail}).exec();
            if(!member){
                continue;
            }
            const pendingInvitations = member.pendingOrgId;

                if(pendingInvitations.includes(id)||member.orgId==id){
                    memberList.splice(i,1);
                }
                else{

                    pendingInvitations.push(id);
                    member.pendingOrgId=pendingInvitations;
                    const notifications=member.notifications;
                    notifications.push('Invitation');
                    member.notifications=notifications;
                    member.save();
                    mailSender(memberEmail, "You have been invited!", "",'<span>You have been invited to join Argusoft. Headover to your <a href="http://localhost:3000/memberLogin">Managd dashboard</a> to join!</span>')
                }
        }
        res.status(200).json({"message":"Sent Invitations to valid members"})
    }catch(error){
        res.status(500).json({"message":"Internal Server Error"})
    }
}


module.exports = addMember;