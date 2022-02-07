const express = require('express');
const router = express.Router();
const accountServices = require('../services/account');
const jwt = require('jsonwebtoken');

router.get('/', (req,res,next)=>{
    res.render('login');
})

router.post('/',async (req,res,next)=>{
    try {
        const userData = await accountServices.getUser(req.body);
        if(!userData){
            res.status(400).json({
                statusCode: 400,
                mess : 'User or password was wrong'
            })
        }else{
            res.status(200).json({
                statusCode: 200,
                mess: 'Login success',
                token : jwt.sign({token: userData._id},'id',{expiresIn: '1h'})
            })
        }
    } catch (error) {
        res.status(500).json({
            statusCode: 500,
            mess: 'Sever error'
        })
    }

});



module.exports = router;