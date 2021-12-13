const  Account = require('../models/Account');

// const {multiMongooseToObject} = require('../../util/mongoose');
class LoginControllers {
    login(req,res){
         //account/login
        res.render('account/login')
    }
    register(req,res){
        //account/logout
        res.render('account/register')
    }
}


module.exports = new LoginControllers;