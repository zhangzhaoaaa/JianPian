var utils    = require( '../utils' );
var mongoose = require( 'mongoose' );
var Todo     = mongoose.model( 'Todo' );

exports.index = function ( req, res, next ){
  var user_id = req.cookies ?
    req.cookies.user_id : undefined;
  console.log('ddddd-----');
  Todo.
    find({ user_id : user_id }).
    sort( '-updated_at' ).
    exec( function ( err, todos ){
      if( err ) return next( err );

      res.render( 'index', {
          title : 'Express Todo Example',
          todos : todos
      });
    });
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
  res.render('settings', { title: 'Express' });
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
