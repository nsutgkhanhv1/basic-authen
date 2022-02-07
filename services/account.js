const Account = require('../models/Account');
const bcrypt = require('bcrypt')

async function getUser(userdata) {
    const data = await Account.findOne({ 
        user: userdata.user, 
    });
    const match = await bcrypt.compare(userdata.password, data.password);
    if(match){
        return data
    }else{
        return null
    }
}
  
async function createUser(userdata) {
    var passwordHash = await bcrypt.hash(userdata.password , 10)
    const newUSer = await new Account({
        user: userdata.user,
        password: passwordHash,
    });
    return newUSer.save()
}
  
module.exports = {
    getUser: getUser,
    createUser: createUser,
};