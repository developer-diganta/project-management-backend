const { model } = require("mongoose");
const models = require("../models/models");

const deleteTask = async(req,res) => {
    const {
        taskId
    } = req.body;
    
    try{
        const task = await models.Task.findById(taskId).exec();
        if(!task){
            res.status(404).json({"message":"No task found"})
        }
        const members = task.assignees;
        for(let i=0;i<members.length;i++){
            await members[i].splice(members[i].indexOf(taskId));
            await members[i].save();
        }
        await models.Task.findByIdAndDelete(taskId).exec();
        res.json("200").json({"message":"Task Deleted"});
    }catch(error){
        console.log(error)
        res.status(500).json({"message":"Internal Server Error"})
    }
}


module.exports = deleteTask;