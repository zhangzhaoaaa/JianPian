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
exports.checkUser=function(req,res,next){
    console.log(req.query.email)
    if (req.query.email!=""){
        UserAccount.findOne({name:req.query.email},function(err,userAccount,count){
            if( err ) return next( err );
            if (userAccount==null){
                res.send("true");
            }else{
                res.send("false");
            }
        });
    }
};
exports.authentication =function (req, res, next) {
    if (!req.session.user) {
        req.session.error='请先登陆';
        return res.redirect('/signIndex');
    }
    next();
};
exports.login=function(req, res, next) {
    var minute = 60 * 1000;
    if (req.body.remember){
        res.cookie('remember', 1, { maxAge: minute });
    }
    if (req.session.answer==req.body.answer){
        UserAccount.findOne({name:req.body.useremail,password:req.body.password},function(err,userAccount,count){
            if( err ) return next( err );
            if (userAccount==null){
                res.send({code:"fail",msg:"用户名或者密码错误！"});
            }else{
                res.cookie('user', userAccount, { maxAge: minute });
                req.session.user=userAccount;
                res.send({code:"success"});
            }
        });
    }else{
        res.send({code:"fail",msg:"验证码错误！"});
    }
};

exports.logout = function(req,res,next){
    req.session.user=null;
    res.clearCookie("user");
    res.redirect('/index');
};
exports.register=function(req, res, next) {
    console.log('register');
    res.render('register', { title: 'Express' });
};
exports.registerSave=function(req, res, next) {
    console.log('registerSave1',req.body.email,req.body.password);
    var user = new UserAccount();
    user.name=req.body.email;
    user.password=req.body.password;
    user.save( function ( err, user, count ){
        if( err ) return next( err );
        res.send({msg:"success"});
        //res.redirect("/signIndex");
    });
};
