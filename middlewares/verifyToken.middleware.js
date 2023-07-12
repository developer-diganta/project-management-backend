const jwt = require("jsonwebtoken");
require("dotenv").config();
const author = (req, res, next) => {
    const token = req.body.token;
    console.log(req.body)
    if (!token) {
        res.status(401).json({ message: "No token detected" });
    }

    else {
        jwt.verify(token, process.env.SESSION_KEY, (error, decoded) => {
            if (error) {
                console.log(error)
                res.status(401).json({ message: "Verification Failed" });
            }
            else {
                console.log(decoded.email)
                if (req.body.email === decoded.email) {
                
                    next();
                }
                else {

                    res.status(401).json({ message: "Verification Failed" });
                }
            }
        })
    }
}

module.exports = author;