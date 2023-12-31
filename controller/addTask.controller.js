require('dotenv').config();
const { model } = require("mongoose");
const models = require("../models/models");
const joi = require("../config/Joi");
const { OAuth2Client } = require('google-auth-library')
const client = new OAuth2Client(process.env.GOOGLE_CLIENTID)
const generateToken = require("../middlewares/generateToken.middleware")
const saltRounds = 10;
const bcrypt = require('bcrypt');
const mailSender = require('../utils/mailSender');
const addTask = async (req,res) => {
    const {
        assignees,
        status,
        progress,
        githubUsername,
        githubRepo,
        githubIssue,
        notifications,
        startDate,
        endDate,
        extension,
        orgId,
        createdBy,
        title,
        description
    } = req.body;

    try{
        
        // const validate = await joi.organisationSignUpSchema.validateAsync({ name,email,phoneNo,location,password });
       
        const organisation = await models.Organisation.find({_id:orgId}).exec();
        
        if(!organisation.length){
            console.log(organisation)
            res.status(404).json({"message":"Organisation does not exist"});
            return;
        }
        // console.log(req.body)
        const newTask = new models.Task({
            assignees,
            status,
            progress,
            githubUsername,
            githubRepo,
            githubIssue,
            notifications,
            startDate,
            endDate,
            extension,
            orgId,
            createdBy,
            title,
            description
        });
        console.log("TTTTT",req.body)
        await newTask.save();
        const taskid = newTask._id;
        for(let i=0;i<assignees.length;i++){
            const assignee=assignees[i];
            const currentAssignee = await models.Member.find({email:assignee}).exec();
            console.log(currentAssignee)
            currentAssignee[0].tasks.push(taskid);
            currentAssignee[0].notifications.push('New Task Added');
            mailSender(assignee, "New Task Assigned","",`
            <div>
            <p>Hi! ${currentAssignee[0].name},</p>
            <p>You have been assigned a new task. Headover to your kanban board to see all details. Happy Productivity!</p>
            <p>Team ManagD</p>
            </div>
            `)
            await currentAssignee[0].save();
        }

        res.status(200).json({"message":"Task added"})

    }catch(error){
        console.log(error)
        res.status(500).json(error);
    }
}

module.exports = addTask