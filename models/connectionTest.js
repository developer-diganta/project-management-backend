const mongoose = require("mongoose");
function testConnection(url) {
    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error: "));
    db.once("open", function () {
        });
}

module.exports = testConnection;