/**
 * Created by mike on 15-8-3.
 */
var express = require('express');
var mongoose=require('mongoose');
var UserAccount = mongoose.model('UserAccount');

exports.signIndex=function(req, res, next) {
    res.render('login', { title: 'Express' });
    //console.log('sininedx');
};
exports.login=function(req, res, next) {
    console.log('singin');
    req.session.sessname = 'i am a sesion';
    //res.render('index', { title: 'Express' });
    UserAccount.find({name:"1",password:"1"},function(err,userAccount,count){
        if( err ) return next( err );
        console.log('youzhi',count,userAccount);
        res.send({msg:"success",session:req.session.sessname});
    });
};
exports.register=function(req, res, next) {
    console.log('register');
    res.render('register', { title: 'Express' });
};
exports.registerSave=function(req, res, next) {
    console.log('registerSave1',req.name,req.password);
    var user = new UserAccount();
    user.name="1";
    user.password="1";
    user.save( function ( err, user, count ){
        if( err ) return next( err );
        res.send({msg:"success"});
    });
};
