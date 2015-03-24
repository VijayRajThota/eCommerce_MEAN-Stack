
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');
var MongoClient = require('mongodb').MongoClient;
//var monk = require('monk');
//var db = monk(' localhost:27017/eCommerce');

var app = express();
/*app.use(function (req,res,next)
		{req.db=db;
		next();}
);
*/


// all environments
app.set('port', process.env.PORT || 3005);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

 MongoClient.connect("mongodb://localhost:27017/eCommerce",function(err,db)
		{
	if(!err)
		{console.log("database connected");}
		});


// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);
app.get('/products',routes.products);
app.get('/products/tv',routes.tv);
app.get('/products/tv/sony',routes.sony);
app.get('/products/tv/samsung',routes.samsung);
app.get('/products/tv/lg',routes.lg);
app.get('/products/tv/toshiba',routes.toshiba);
app.get('/products/tablets',routes.tablets);
app.get('/products/tablets/ipad',routes.ipad);
app.get('/products/tablets/lenovo',routes.lenovo);
app.get('/products/tablets/nexus7',routes.nexus7);
app.get('/products/tablets/tab4',routes.tab4);
app.get('/products/phones',routes.phones);
app.get('/products/phones/iphone',routes.iphone);
app.get('/products/phones/nexus5',routes.nexus5);
app.get('/products/phones/s5',routes.s5);
app.get('/products/phones/motox',routes.motox);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
