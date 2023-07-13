const app = require("./index");

const PORT = process.argv[2];


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});