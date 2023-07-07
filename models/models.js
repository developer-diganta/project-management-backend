const mongoose = require("mongoose");

const task = require("./Tasks");
const organisation = require("./Organisation");
const member = require("./Members");


const taskSchema = new mongoose.Schema(task);
const organisationSchema = new mongoose.Schema(organisation);
const memberSchema = new mongoose.Schema(member);


const Task = mongoose.model("Task", taskSchema);
const Organisation = mongoose.model("Organisation", organisationSchema);
const Member = mongoose.model("Member", memberSchema);

module.exports = {
    Task,
    Organisation,
    Member
}