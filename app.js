var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
//var favicon = require('static-favicon');

var morgan = require('morgan');

//var cookieParser = require('cookie-parser');

var methodOverride = require('method-override');
var routes = require('./routes/index');
var users = require('./routes/users');
var app = express();

app.set("port", process.env.PORT || 3000);
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.set('view options', {layout: true}); //use jade master page

//app.use(favicon());
app.use(morgan('dev'));
app.use(bodyParser()) ;
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded());
//app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride() ); //Simulate DELETE and PUT
app.use('/', routes);
app.use('/users', users);


app.listen(app.get("port"), function() {
    console.log("Express server listening on port " + app.get("port"));
});