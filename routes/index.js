var utils    = require( '../utils' );
var mongoose = require( 'mongoose' );
var UserAccount = mongoose.model('UserAccount');
var Album = mongoose.model('Album');
exports.index = function ( req, res, next ){
  var user = req.cookies ?
      req.cookies.user : undefined;
  if (req.session.user||user) {
      console.log('ddddd-----');
      res.render( 'index', {
        title : 'Express Todo Example',
        userInfo:user
      });
  }else{
    res.render( 'index', {
      title : 'Express Todo Example',
      userInfo:null
    });
  }

  /*if (user_id){
    console.log('ddddd-----');
    res.render( 'index', {
      title : 'Express Todo Example'
    });
  }else{
    return res.redirect('/signIndex');
  }*/
};

exports.create = function ( req, res, next ){
  new Todo({
      user_id    : req.cookies.user_id,
      content    : req.body.content,
      updated_at : Date.now()
  }).save( function ( err, todo, count ){
    if( err ) return next( err );

    res.redirect( '/' );
  });
};
exports.settings=function(req, res, next) {
  var id=req.params.id;

 /* if (id=='personalSettings'){
    //res.send({ title: 'Express',msg:'personalSettings' });
  }else if (id=='analysis'){
    res.send({ title: 'Express',msg:'analysis' });
  }else{

  }*/
  var data=[{url:'aaaa',urlname:'xxxxx',active:true},{url:'bbbb',urlname:'xxxxx',active:false}];
  res.render('settings', { title: 'Express',msg:'personalSettings',data:data});
};
exports.uploadPicturesIndex=function(req, res, next) {
  var id=req.params.id;
  var minute = 60*60;
  if (id=='personalSettings'){
    /*UserAccount.findOne({name:req.body.useremail,password:req.body.password},function(err,userAccount,count){
      if( err ) return next( err );
      if (userAccount==null){
        res.send({code:"fail",msg:"用户名或者密码错误！"});
      }else{
        res.cookie('user', userAccount, { maxAge: minute });
        req.session.user=userAccount;
        res.send({code:"success"});
      }
    });*/
    Album.find({},function(req,ablums,count){
      res.render('personalSettings',{ title: 'Express',msg:'personalSettings',ablums:ablums });
    });

  }else if (id=='analysis'){
    res.render('analysis',{ title: 'Express',msg:'analysis' });
  }
 // var data=[{url:'aaaa',urlname:'xxxxx',active:true},{url:'bbbb',urlname:'xxxxx',active:false}];
  //res.render('settings', { title: 'Express',msg:id,data:data });
};

exports.destroy = function ( req, res, next ){
  Todo.findById( req.params.id, function ( err, todo ){
    var user_id = req.cookies ?
      req.cookies.user_id : undefined;

    if( todo.user_id !== user_id ){
      return utils.forbidden( res );
    }

    todo.remove( function ( err, todo ){
      if( err ) return next( err );

      res.redirect( '/' );
    });
  });
};

exports.edit = function( req, res, next ){
  var user_id = req.cookies ?
      req.cookies.user_id : undefined;

  Todo.
    find({ user_id : user_id }).
    sort( '-updated_at' ).
    exec( function ( err, todos ){
      if( err ) return next( err );

      res.render( 'edit', {
        title   : 'Express Todo Example',
        todos   : todos,
        current : req.params.id
      });
    });
};

exports.update = function( req, res, next ){
  Todo.findById( req.params.id, function ( err, todo ){
    var user_id = req.cookies ?
      req.cookies.user_id : undefined;

    if( todo.user_id !== user_id ){
      return utils.forbidden( res );
    }

    todo.content    = req.body.content;
    todo.updated_at = Date.now();
    todo.save( function ( err, todo, count ){
      if( err ) return next( err );

      res.redirect( '/' );
    });
  });
};

exports.getLatestPicture = function( req, res, next ){
  var data = [
    {
        'id' : "1",
      'title' : "First image",
      'url' : "http://www.example.org/1",
      'width' : "200",
      'height' : "283",
      'image' : "../images/sample-images/image_8_big.jpg",
      'preview' : "../images/sample-images/image_8_big.jpg"
    },
    {
      'id' : "1",
      'title' : "First image",
      'url' : "http://www.example.org/1",
      'width' : "200",
      'height' : "283",
      'image' : "../images/sample-images/image_8_big.jpg",
      'preview' : "../images/sample-images/image_8_big.jpg"
    },{
      'id' : "1",
      'title' : "First image",
      'url' : "http://www.example.org/1",
      'width' : "200",
      'height' : "283",
      'image' : "../images/sample-images/image_8_big.jpg",
      'preview' : "../images/sample-images/image_8_big.jpg"
    },{
      'id' : "1",
      'title' : "First image",
      'url' : "http://www.example.org/1",
      'width' : "200",
      'height' : "283",
      'image' : "../images/sample-images/image_8_big.jpg",
      'preview' : "../images/sample-images/image_8_big.jpg"
    },{
      'id' : "1",
      'title' : "First image",
      'url' : "http://www.example.org/1",
      'width' : "200",
      'height' : "283",
      'image' : "../images/sample-images/image_8_big.jpg",
      'preview' : "../images/sample-images/image_8_big.jpg"
    },{
      'id' : "1",
      'title' : "First image",
      'url' : "http://www.example.org/1",
      'width' : "200",
      'height' : "283",
      'image' : "../images/sample-images/image_8_big.jpg",
      'preview' : "../images/sample-images/image_8_big.jpg"
    },
    {
      'id' : "1",
      'title' : "First image",
      'url' : "http://www.example.org/1",
      'width' : "200",
      'height' : "283",
      'image' : "../images/sample-images/image_8_big.jpg",
      'preview' : "../images/sample-images/image_8_big.jpg"
    },
    {
      'id' : "1",
      'title' : "First image",
      'url' : "http://www.example.org/1",
      'width' : "200",
      'height' : "283",
      'image' : "../images/sample-images/image_8_big.jpg",
      'preview' : "../images/sample-images/image_8_big.jpg"
    },{
      'id' : "1",
      'title' : "First image",
      'url' : "http://www.example.org/1",
      'width' : "200",
      'height' : "283",
      'image' : "../images/sample-images/image_8_big.jpg",
      'preview' : "../images/sample-images/image_8_big.jpg"
    },{
      'id' : "1",
      'title' : "First image",
      'url' : "http://www.example.org/1",
      'width' : "200",
      'height' : "283",
      'image' : "../images/sample-images/image_8_big.jpg",
      'preview' : "../images/sample-images/image_8_big.jpg"
    },{
      'id' : "1",
      'title' : "First image",
      'url' : "http://www.example.org/1",
      'width' : "200",
      'height' : "283",
      'image' : "../images/sample-images/image_8_big.jpg",
      'preview' : "../images/sample-images/image_8_big.jpg"
    },{
      'id' : "1",
      'title' : "First image",
      'url' : "http://www.example.org/1",
      'width' : "200",
      'height' : "283",
      'image' : "../images/sample-images/image_8_big.jpg",
      'preview' : "../images/sample-images/image_8_big.jpg"
    }
  ];

  res.send({
    message:"success",
    data:data
  });
};

// ** express turns the cookie key to lowercase **
exports.current_user = function ( req, res, next ){
  var user_id = req.cookies ?
      req.cookies.user_id : undefined;

  if( !user_id ){
    res.cookie( 'user_id', utils.uid( 32 ));
  }

  next();
};
