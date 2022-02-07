const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Account = new Schema({
    status : {type: String, default: 'active'},
    avatar : {type: String},
    role: {type: String , required : true , default:'student'},
    courses: {type : Array, ref:'Course'},
    name: {type: String,  maxLength: 255},
    user: {type: String,  maxLength: 255},
    password: {type: String, maxLength: 600},
})

module.exports = mongoose.model('Account', Account);