
require('dotenv').config();
let url = `mongodb://${process.env.MONGO_URL}:27017/testDB`;
module.exports = { url };