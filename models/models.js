const mongoose = require("mongoose");

const task = require("./Tasks");
const organisation = require("./Organisation");
const member = require("./Members");
const otp = require("./Otp");

const taskSchema = new mongoose.Schema(task);
const organisationSchema = new mongoose.Schema(organisation);
const memberSchema = new mongoose.Schema(member);
const otpSchema = new mongoose.Schema(otp);

const Task = mongoose.model("Task", taskSchema);
const Organisation = mongoose.model("Organisation", organisationSchema);
const Member = mongoose.model("Member", memberSchema);
const OTP = mongoose.model("OTP", otpSchema);

module.exports = {
    Task,
    Organisation,
    Member,
    OTP
}