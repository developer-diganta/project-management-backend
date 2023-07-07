const Joi = require('joi');

const organisationSignUpSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    phoneNo: Joi.string()
    .pattern(/^[0-9]{10}$/)
    .message('Invalid phone number')
    .required(),
    location: Joi.string().required(),
    password: Joi.string()
    .regex(/[ -~]*[a-z][ -~]*/) // at least 1 lower-case
    .regex(/[ -~]*[A-Z][ -~]*/) // at least 1 upper-case
    .regex(/[ -~]*(?=[ -~])[^0-9a-zA-Z][ -~]*/) // basically: [ -~] && [^0-9a-zA-Z], at least 1 special character
    .regex(/[ -~]*[0-9][ -~]*/) // at least 1 number
    .min(4)
    .required()
});

const organisationLoginSchema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string()
    .regex(/[ -~]*[a-z][ -~]*/) // at least 1 lower-case
    .regex(/[ -~]*[A-Z][ -~]*/) // at least 1 upper-case
    .regex(/[ -~]*(?=[ -~])[^0-9a-zA-Z][ -~]*/) // basically: [ -~] && [^0-9a-zA-Z], at least 1 special character
    .regex(/[ -~]*[0-9][ -~]*/) // at least 1 number
    .min(4)
    .required()
})


const memberSignUpSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    phoneNo: Joi.string()
    .pattern(/^[0-9]{10}$/)
    .message('Invalid phone number')
    .required(),
    password: Joi.string()
    .regex(/[ -~]*[a-z][ -~]*/) // at least 1 lower-case
    .regex(/[ -~]*[A-Z][ -~]*/) // at least 1 upper-case
    .regex(/[ -~]*(?=[ -~])[^0-9a-zA-Z][ -~]*/) // basically: [ -~] && [^0-9a-zA-Z], at least 1 special character
    .regex(/[ -~]*[0-9][ -~]*/) // at least 1 number
    .min(4)
    .required()
});


module.exports = {
    organisationSignUpSchema,
    organisationLoginSchema,
    memberSignUpSchema
}