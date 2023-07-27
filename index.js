const express = require("express");
const app = express();

const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// const zoomMeetRouter = require("./routes/zoomMeet");

const mongoose = require("mongoose");
const { url } = require("./models/connection");
const testConnection = require("./models/connectionTest");

mongoose.connect(url, { useNewUrlParser: true });
testConnection(url);
const home = require("./routes/homeRoute");
const addOrganisation = require("./routes/addOrganisation");
const loginOrganisation = require("./routes/loginOrganisation");
const addMember = require("./routes/addMember");
const memberSignup = require("./routes/memberSignup");
const getOrganisationDetails = require("./routes/getOrganisationDetails");
const addTask = require("./routes/addTask");
const acceptInvitation = require("./routes/acceptInvitation");
const moveTask = require("./routes/moveTask");
const editTask = require("./routes/editTask");
const getGitHubStats = require("./routes/getGitHubStats");
const getAllMembers = require("./routes/getAllMembers");
const getTasksForOrganisation = require("./routes/getTasksForOrganisation");
const removeMember = require("./routes/removeMember");
const getNotificationsForOrganisation = require("./routes/getNotificationsForOrganisation");
const clearNotification = require("./routes/clearNotifications");
const editOrganisationDetails = require("./routes/editOrganisationDetails");
const memberLogin = require("./routes/memberLogin");
const getMemberTasks = require("./routes/getMemberTasks");
const getMemberDetails = require("./routes/getMemberDetails");
const getTask = require("./routes/getTask");
const editMemberDetails = require("./routes/editMemberDetails")
const getGitHubIssues = require("./routes/getGitHubIssues")
const getGitHubIssueDetails = require("./routes/getGitHubIssueDetails")
const getNotificationsForMember = require("./routes/getNotificationsForMember")
const sendOTP = require("./routes/sendOTP")
const getGitHubPrs = require("./routes/getGitHubPrs")
const rejectInvitation = require("./routes/rejectInvitation")

const { model } = require("mongoose");
const models = require("./models/models");
const resetPasswordOfMember = require("./routes/resetPasswordOfMember");
const resetPasswordOfOrganisation = require("./routes/resetPasswordOfOrganisation");

// setInterval(async ()=>{
//     const tasks = await models.Task.find({}).exec();
//     console.log(tasks)
//     for(let i=0;i<tasks.length;i++){

//         if(new Date(tasks[i].endDate).getTime()<new Date().getTime() && tasks[i].status!=="Completed" || tasks[i].status!=="Halted"){
//             tasks[i].status="Delayed";
//             await tasks[i].save()
//         }
//     }
//     console.log(tasks)
//     // await tasks.save()
// },3600000)



app.use("/", home)
app.use("/", addOrganisation)
app.use("/", loginOrganisation)
app.use("/", addMember)
app.use("/", memberSignup)
app.use("/", getOrganisationDetails)
app.use("/", addTask)
app.use("/", acceptInvitation)
app.use("/", moveTask)
app.use("/", editTask)
app.use("/", getGitHubStats)
app.use("/", getAllMembers)
app.use("/", getTasksForOrganisation)
app.use("/", removeMember)
app.use("/", getNotificationsForOrganisation)
app.use("/", clearNotification)
app.use("/", editOrganisationDetails)
app.use("/", memberLogin)
app.use("/",getMemberTasks)
app.use("/",getMemberDetails)
app.use("/",getTask)
app.use("/",editMemberDetails)
app.use("/",getGitHubIssues)
app.use("/",getGitHubIssueDetails)
app.use("/",getNotificationsForMember)
app.use("/",getGitHubPrs)
app.use("/",sendOTP)
app.use("/",rejectInvitation)
app.use("/", resetPasswordOfMember)
app.use("/",resetPasswordOfOrganisation)
// Other middleware and configurations...

// Use the zoomMeetRouter for the /zoomMeet endpoint
// app.use("/zoomMeet", zoomMeetRouter);


module.exports = app;
