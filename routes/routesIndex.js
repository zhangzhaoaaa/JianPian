/**
 * Created by mike on 15-8-20.
 */
var index       = require('./index');
var login       = require( './login' );
var picture     = require( './picture' );
var analysis    = require( './analysis' );
exports.routesIndex=function(app,upload){
    app.get('/',function(req,res){
        return res.redirect('/index');
    });
    //app.get(    '/index',                       login.authentication);               //首页
    app.get(    '/index',                       index.index);               //首页
    app.get(    '/signIndex',                   login.signIndex );          //登录页
    app.get(    '/checkUser',                   login.checkUser );          //登录页
    app.get(    '/logout',                      login.authentication );          //登录页
    app.get(    '/logout',                      login.logout );          //登录页
    app.post(   '/login',                       login.login);               //登录动作
    app.get(    '/register',                    login.register);            //注册页
    app.post(   '/registerSave',                login.registerSave);        //注册动作
    app.get(    '/albumPictureIndex',           picture.albumPictureIndex); //相册列表页
    app.get(    '/analysisData',                analysis.analysis);         //数据统计页
    app.post(   '/upload',                       upload.array('avatar'),             picture.upload);    //照片上传
    app.get(    '/getLastestPicture',           index.getLatestPicture);
    app.get(    '/settings',                     index.settings);
    app.get(    '/uploadPicturesIndex/:id',                     index.uploadPicturesIndex);
    app.post(    '/createAlbum',                     picture.createAlbum);
    app.post(    '/albumList',                     picture.albumList);

    //待用
    /*app.post(   '/create',                      routes.create );
    app.get(    '/destroy/:id',                 routes.destroy );
    app.get(    '/edit/:id',                    routes.edit );
    app.post(   '/update/:id',                  routes.update );
    app.get(    '/getLastestPicture',           routes.getLatestPicture);
    app.get(    '/settings',                    routes.settings);*/
};
