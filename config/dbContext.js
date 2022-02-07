const mongoose = require('mongoose');

async function connect(){

    try {
        await mongoose.connect('mongodb://localhost:27017/NodeJS_Revise',{
        useNewUrlParser: true, 
        useUnifiedTopology: true
        });
        console.log('Connect Success');
    } catch (error) {
        console.log('Connect Failure : ', error)
    }
}

module.exports = { connect };