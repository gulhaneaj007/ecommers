const express = require("express");
const cors = require("cors")
require("./db/db_config")


const app = express();

const User = require('./db/Users');
app.use(cors());
app.use(express.json());

app.post("/register" , async (req,resp)=>{
    let user= new User(req.body);
     let result = await user.save();
     resp.send("User added successfully");
    
})

app.listen(5000)


   


