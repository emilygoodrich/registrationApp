const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email:String,
    username: String,
    age: Number
})
module.exports = mongoose.model('User', userSchema)