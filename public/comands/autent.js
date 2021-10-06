const mongoose = require('mongoose');
const login = require('../models/login');

function singup (req, res){
    const user = new login({
        username: req.body.username
    })

    user.save((err)=>{
        if(err) res.status(500).send({message: 'error al guardar user:'+err})
        return res.status(200).send({token: service.createToken(user)})
    })
}

function singin (req, res){
    
}

module.exports = {
    singin,
    singup
}