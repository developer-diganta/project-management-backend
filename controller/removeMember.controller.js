
const { model } = require("mongoose");
const models = require("../models/models");

const removeMember = async(req,res) => {
    const {
        memberList,
        id,
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
            member.orgId = null;
            await member.save();            
            const tasks = await models.Task.find({ordId:id}).exec();
            for(let k=0;k<tasks.length;k++){
                const task = tasks[k];
                if(task.assignees.includes(member._id)){

                    task.assignees=task.assigness.splice(indexOf(member._id));
                    await task.save();
                }
            }
        }

        res.status(200).json({"message":"Removed valid members"})
    }catch(error){
        console.log(error)
        res.status(500).json({"message":"Internal Server Error"})
    }
}


module.exports = removeMember;