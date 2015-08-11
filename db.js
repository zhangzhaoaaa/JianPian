var mongoose = require( 'mongoose' );
var Schema   = mongoose.Schema;

var Todo = new Schema({
    user_id    : String,
    content    : String,
    updated_at : Date
});
var UserAccount = new Schema({
    name    : String,
    password    : String
});

mongoose.model( 'Todo', Todo );
mongoose.model( 'UserAccount', UserAccount );
mongoose.connect( 'mongodb://localhost/express-todo' );
