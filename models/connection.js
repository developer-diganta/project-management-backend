
require('dotenv').config();
let url = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASS}@cluster0.mtjf4zl.mongodb.net/?retryWrites=true&w=majority`;
module.exports = { url };