const { model } = require("mongoose");
const models = require("../models/models");

const deleteTask = async(req,res) => {
    const {
        id
    } = req.body;
    
    try{
        const task = await models.Task.findById(id).exec();
        const members = task.assignees;
        for(var i=0;i<members.length;i++){
            const member = members[i];
            await models.Member.findById(member).exec();
        }
zz33
    }catch(error){
                res.status(500).json({"message":"Internal Server Error"})
    }
}


module.exports = deleteTask;