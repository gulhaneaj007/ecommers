const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    username: String,
    password: String
})

module.exports = mongoose.model("master_usr",userSchema);









 