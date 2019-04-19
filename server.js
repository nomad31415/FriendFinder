var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');


var app = express()
var PORT = process.env.PORT || 3000;
 
// parse application/json  just in case
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));
app.use(express.json());


// R
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);


app.listen(PORT, function(){
	console.log("App listening on PORT " + PORT);
});