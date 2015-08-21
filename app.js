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
var multer         = require( 'multer');
var session        = require( 'express-session');
var MongoStore     = require( 'connect-mongo')(session);
var fs             = require( 'fs');
var app            = express();
var routesIndex    = require( './routes/routesIndex' );
var upload         = multer({ dest: 'uploads/' });
app.use(session({
  secret: 'foo',
  store: new MongoStore({
    url:'mongodb://localhost/express-todo',
    ttl: 14 * 24 * 60 * 60
  })
}));
// all environments
app.set( 'port', process.env.PORT || 3001 );
app.engine( 'ejs', engine);

app.set( 'views', path.join( __dirname, 'views' ));
app.set( 'view engine', 'ejs' );
app.use( favicon( __dirname + '/public/favicon.ico' ));
app.use( logger( 'dev' ));
app.use( methodOverride());
app.use( cookieParser());
app.use( bodyParser.json());
app.use( bodyParser.urlencoded({ extended : true }));
app.use( static( path.join( __dirname, 'public' )));
// Routes
routesIndex.routesIndex(app,upload);
// development only
if( 'development' == app.get( 'env' )){
  app.use( errorHandler());
};

http.createServer( app ).listen( app.get( 'port' ), function (){
  console.log( 'Express server listening on port ' + app.get( 'port' ));
});