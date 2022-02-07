const express = require('express');
const router = express.Router();
const accountServices = require('../services/account');
const jwt = require('jsonwebtoken');

router.get('/', (req,res,next)=>{
    res.render('signup');
})

router.post('/',async (req,res,next)=>{
    try {
        const userData = await accountServices.createUser(req.body);
        if(userData){
            res.status(200).json({
                statusCode: 200,
                mess: 'Signup success'
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