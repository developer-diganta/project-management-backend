const app = require('../index');
const request = require('supertest');
const assert = require('assert');
const models = require("../models/models");
const bcrypt = require('bcrypt');
const saltRounds = 10; // assuming you are using 10 salt rounds for hashing
const sampleId = "64176c294ca5172ae9a6b1c3";
const jwt = require("jsonwebtoken");



describe('addOrganisation', () => {
    beforeAll(async()=>{
        // await models.Organisation.deleteMany();
    });

    afterAll(async () => {
        await models.Organisation.deleteMany();
    });

    afterEach(async () => {
        
    })

    it('returns 200 and token for a new organisation', async ()=>{
        const res = await request(app)
        .post('/addOrganisation')
        .send({
            name:'Test Organisation',
            email:'admin@test.com',
            password:'Admin@123',
            phoneNo:"1234567890",
            location:'Test Location'
        })
        .expect(200);

        expect(res.body.token).toBeDefined();
        expect(res.body.id).toBeDefined();
        expect(res.body.email).toEqual('admin@test.com')
    })

    it('returns 401 for an existing organisation', async() => {

        
        const res = await request(app)
        .post('/addOrganisation')
        .send({
            name:'Test Organisation',
            email:'admin@test.com',
            password:'Admin@123',
            phoneNo:"1234567890",
            location:'Test Location'
        })
        .expect(401);
        console.log(res)
        expect(res.body.message).toEqual('Organisation already exists');
    });
})


  
  