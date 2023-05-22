const express = require("express");
const cors = require("cors")
require("./db/db_config")
const User = require('./db/Users');
const app = express();


app.use(express.json());
app.use(cors());


app.post("/register", async (req, resp) => {
    let user = new User(req.body);
    let result = await user.save();
    result=result.toObject()
    delete result.password 
    resp.send(result);

})

app.post("/login", async (req, res) => {
    if (req.body.password && req.body.username) {
        let user = await User.findOne(req.body).select("-password");
        if (user) {
            res.send(user);
        } else {
            res.send({ result: "User not found" });
        }
    } else {
        res.send({ result: "User name/Pasword is Empty" });
    }
})

app.listen(5000)





