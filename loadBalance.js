const app = require("./index");
const axios = require("axios");

const servers = [
    "http://localhost:3100/",
    "http://localhost:3200/"
]

let current = 0;
let server;
server = servers[current];

const handler = async (req,res) => {
    console.log("!2123")
    endPoint = req._parsedUrl.path;
    console.log(req._parsedUrl)
    
    console.log(endPoint)
    try{
        const response = await axios.post(server+endPoint,{
            body:req.body
        })
        res.send(response)
    }catch(error){
        try{
           server = servers[(current++)%2];
           const response = await axios.post(server+endPoint,{
            body:req.body
        })
        res.send(response)
        }catch(error){
            res.send(error)
        }
    }
}


app.get('*',handler).post('*',handler);

const PORT =3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});