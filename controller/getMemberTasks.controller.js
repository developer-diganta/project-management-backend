require('dotenv').config();
const { model } = require("mongoose");
const models = require("../models/models");
const joi = require("../config/Joi");
const { OAuth2Client } = require('google-auth-library')
const client = new OAuth2Client(process.env.GOOGLE_CLIENTID)
const generateToken = require("../middlewares/generateToken.middleware")
const saltRounds = 10;
const bcrypt = require('bcrypt');
const { default: axios } = require('axios');
const getMemberTasks = async (req,res) => {
    const {
        id
    } = req.body;

    
    try{
        
        const taskList=[];
    
        // const tasks = await models.Task.find({orgId:id}).exec();
    
        const member = await models.Member.findById(id).exec();
        const tasks = member.tasks;
        for(var i=0;i<tasks.length;i++){
            const task = tasks[i];
            console.log(task)
            const taskDetail  = await models.Task.findById(task).exec();
            console.log(taskDetail)
            taskList.push(taskDetail); 
        }
        res.status(200).json({taskList})

    }catch(error){
        console.log(error)
        res.status(500).json("Internal Server Error");
    }
}

module.exports = getMemberTasks