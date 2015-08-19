/**
 * Module dependencies.
 */

// mongoose setup
require( './db' );

var express        = require( 'express' );
var http           = require( 'http' );
var path           = require( 'path' );
var engine         = require( 'ejs-locals' );
var favicon        = require( 'serve-favicon' );
var cookieParser   = require( 'cookie-parser' );
var bodyParser     = require( 'body-parser' );
var methodOverride = require( 'method-override' );
var logger         = require( 'morgan' );
var errorHandler   = require( 'errorhandler' );
var static         = require( 'serve-static' );
var multipart = require('connect-multiparty');
var multer = require('multer');
var fs = require('fs');
//var connect        = require( 'connect' );

var app    = express();
var routes = require( './routes' );
var login = require( './routes/login' );
var picture = require( './routes/picture' );
var analysis = require( './routes/analysis' );


var session = require('express-session');
var MongoStore = require('connect-mongo')(session);

/*app.use(session({
  secret: 'foo',
  store: new MongoStore({
    url:'mongodb://localhost/express-todo',
    ttl: 14 * 24 * 60 * 60
  })
}));*/



// all environments
app.set( 'port', process.env.PORT || 3001 );
app.engine( 'ejs', engine );
app.set( 'views', path.join( __dirname, 'views' ));
app.set( 'view engine', 'ejs' );
app.use( favicon( __dirname + '/public/favicon.ico' ));
app.use( logger( 'dev' ));
app.use( methodOverride());
app.use( cookieParser());
app.use( bodyParser.json());
app.use( bodyParser.urlencoded({ extended : true }));


// Routes
//app.use( routes.current_user );
//app.get(  '/',            login.signIndex );
app.get(  '/index',            routes.index );
app.get(  '/signIndex',   login.signIndex );
app.post(  '/login',   login.login);
app.post( '/create',      routes.create );
app.get(  '/destroy/:id', routes.destroy );
app.get(  '/edit/:id',    routes.edit );
app.post( '/update/:id',  routes.update );
app.get( '/register',  login.register);
app.post( '/registerSave',  login.registerSave);
app.get('/getLastestPicture',routes.getLatestPicture);
app.get('/settings',routes.settings);
app.get('/albumPictureIndex',picture.albumPictureIndex);
app.get('/analysisData',analysis.analysis);





app.use( static( path.join( __dirname, 'public' )));



var upload = multer({ dest: 'uploads/' });
app.post('/upload', upload.array('avatar'), function (req, res, next) {
  // req.body contains the text fields
  console.log(req.files);
  var extName = '';  //后缀名
  var data = req.files;
  for (var i=0;i<data.length;i++){
    var file = data[i];
      switch (file.mimetype) {
        case 'image/pjpeg':
          extName = 'jpg';
          break;
        case 'image/jpeg':
          extName = 'jpg';
          break;
        case 'image/png':
          extName = 'png';
          break;
        case 'image/x-png':
          extName = 'png';
          break;
      }

      if(extName.length == 0){
        res.locals.error = '只支持png和jpg格式图片';
        res.render('index', { title: TITLE });
        return;
      }

      var avatarName = Math.random() + '.' + extName;
      var newPath = file.destination + avatarName;

      console.log(newPath);
      fs.renameSync(file.path, newPath);  //重命名
  }


})

/*

app.post('/upload', function(req, res){
  var form = new multipart.Form({uploadDir: './public/files/'});
  //下载后处理
  form.parse(req, function(err, fields, files) {
    var filesTmp = JSON.stringify(files,null,2);

    if(err){
      console.log('parse error: ' + err);
    } else {
      console.log('parse files: ' + filesTmp);
      var inputFile = files.inputFile[0];
      var uploadedPath = inputFile.path;
      var dstPath = './public/files/' + inputFile.originalFilename;
      //重命名为真实文件名
      fs.rename(uploadedPath, dstPath, function(err) {
        if(err){
          console.log('rename error: ' + err);
        } else {
          console.log('rename ok');
        }
      });
    }

    res.writeHead(200, {'content-type': 'text/plain;charset=utf-8'});
    res.write('received upload:\n\n');
    res.end(util.inspect({fields: fields, files: filesTmp}));
  });
});*/

// development only
if( 'development' == app.get( 'env' )){
  app.use( errorHandler());
}

http.createServer( app ).listen( app.get( 'port' ), function (){
  console.log( 'Express server listening on port ' + app.get( 'port' ));
});