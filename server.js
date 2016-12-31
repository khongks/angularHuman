var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');

// Constants
let PORT = 8000 || process.env.PORT;
let DBURL = "mongodb://localhost:27017/angularHuman";

// Routes
var mainRouter = require('./routes/index');
var apiRouter = require('./routes/api');

// Path
var path = require('path');

// express
var app = express();

// View Engine
app.set('views', path.join(__dirname + '/client/views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static(path.join(__dirname,'client')));

// Set static folder
//app.use(express.static(path.join(__dirname, 'client')));

// Middlewares
// Morgan
app.use(morgan('dev'));
// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/', mainRouter);
app.use('/api', apiRouter);

// Connect to mongoDB
mongoose.connect(DBURL, function(err){
    if (err) { return err; }
    else { console.log('Successfully connected to ' + DBURL); }
});

app.listen(PORT, function(){
    console.log('Listening on port ' + PORT);
});