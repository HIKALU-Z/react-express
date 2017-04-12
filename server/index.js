var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
var logger = require('morgan');
var routes = require('./routes');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/react-express-api');

app.use(bodyParser.json());
app.use(cors());
app.use(logger('dev'));

routes(app);

var db = mongoose.connection;
db.on('error', console.log);
db.once('open', function() {
  console.log('success!')
});

app.listen(3000, function() {
  console.log('Your server is running on port 3000');
});
