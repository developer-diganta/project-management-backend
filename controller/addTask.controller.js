require('dotenv').config();
const { model } = require("mongoose");
const models = require("../models/models");
const joi = require("../config/Joi");
const { OAuth2Client } = require('google-auth-library')
const client = new OAuth2Client(process.env.GOOGLE_CLIENTID)
const generateToken = require("../middlewares/generateToken.middleware")
const saltRounds = 10;
const bcrypt = require('bcrypt')
const addTask = async (req,res) => {
    const {
        assignees,
        status,
        progress,
        github,
        notifications,
        startDate,
        endDate,
        extension,
        orgId,
        createdBy
    } = req.body;

    try{
        
        // const validate = await joi.organisationSignUpSchema.validateAsync({ name,email,phoneNo,location,password });
       
        const organisation = await models.Organisation.find({_id:orgId}).exec();
        
        if(!organisation.length){
            res.status(404).json({"message":"Organisation already exists"});
            return;
        }
    
        const newTask = new models.Task({
            assignees,
            status,
            progress,
            github,
            notifications,
            startDate,
            endDate,
            extension,
            orgId,
            createdBy
        });
        await newTask.save();

        for(let i=0;i<assignees.length;i++){
            const assignee=assignees[i];
            const currentAssignee = await models.Member.findById(assignee).exec();
            currentAssignee.tasks=currentAssignee.tasks.push(newTask._id);
            currentAssignee.notifications=currentAssignee.notifications.push('New Task Added');
            await currentAssignee.save();
        }

        res.status(200).json({"message":"Task added"})

    }catch(error){
        console.log(error)
        res.status(500).json("Internal Server Error");
    }
}

module.exports = addTask