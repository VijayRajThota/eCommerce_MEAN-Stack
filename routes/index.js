
/*
 * GET home page.
 */

exports.index = function(req, res){
	res.render('index', { title: 'index' });
};

exports.phones = function(req, res){	
res.render('phones', { title: 'phones' });
	};
exports.products = function(req, res){
	var MongoClient = require('mongodb').MongoClient;

	// Connect to the db
	MongoClient.connect("mongodb://localhost:27017/eCommerce", function(err, db) {
		if(err) {
			return console.dir(err);
		}
		else {
			console.log("We are connected");
		}
		
		
		var collection = db.collection('Category');
		
		var data;
		
		collection.find({"Category":"Television"}).toArray(function(err, items) {
			console.log("Item ::::" +items);
			
			res.render('products',{data : items});
		});
		console.log("Item data::::" +data);
		
	});
	
};


exports.tablets = function(req, res){
res.render('tablets', { title: 'tablets' });
	};
exports.tv = function(req, res){
res.render('tv', { title: 'tv' });
	};
exports.sony = function(req, res){
	var MongoClient = require('mongodb').MongoClient;

	// Connect to the db
	MongoClient.connect("mongodb://localhost:27017/eCommerce", function(err, db) {
		if(err) {
			return console.dir(err);
		}
		else {
			console.log("We are connected");
		}
		
		
		var collection = db.collection('television');
		
		var data;
		
		collection.find({"Name":"Bravia"}).toArray(function(err, items) {
			console.log("Item ::::" +items);
			
			res.render('sony',{data : items});
		});
		console.log("Item data::::" +data);
		
	});
	
};
exports.samsung = function(req, res){
	var MongoClient = require('mongodb').MongoClient;

	// Connect to the db
	MongoClient.connect("mongodb://localhost:27017/eCommerce", function(err, db) {
		if(err) {
			return console.dir(err);
		}
		else {
			console.log("We are connected");
		}
		
		
		var collection = db.collection('television');
		
		var data;
		
		collection.find({"Name":"SamsungLED"}).toArray(function(err, items) {
			console.log("Item ::::" +items);
			
			res.render('samsung',{data : items});
		});
		console.log("Item data::::" +data);
		
	});
	
};
exports.lg = function(req, res){
	var MongoClient = require('mongodb').MongoClient;

	// Connect to the db
	MongoClient.connect("mongodb://localhost:27017/eCommerce", function(err, db) {
		if(err) {
			return console.dir(err);
		}
		else {
			console.log("We are connected");
		}
		
		
		var collection = db.collection('television');
		
		var data;
		
		collection.find({"Name":"LG Smart TV"}).toArray(function(err, items) {
			console.log("Item ::::" +items);
			
			res.render('lg',{data : items});
		});
		console.log("Item data::::" +data);
		
	});
	
};
exports.toshiba = function(req, res){
	var MongoClient = require('mongodb').MongoClient;

	// Connect to the db
	MongoClient.connect("mongodb://localhost:27017/eCommerce", function(err, db) {
		if(err) {
			return console.dir(err);
		}
		else {
			console.log("We are connected");
		}
		
		
		var collection = db.collection('television');
		
		var data;
		
		collection.find({"Name":"Toshiba"}).toArray(function(err, items) {
			console.log("Item ::::" +items);
			
			res.render('toshiba',{data : items});
		});
		console.log("Item data::::" +data);
		
	});
	
};
exports.ipad = function(req, res){
	var MongoClient = require('mongodb').MongoClient;

	// Connect to the db
	MongoClient.connect("mongodb://localhost:27017/eCommerce", function(err, db) {
		if(err) {
			return console.dir(err);
		}
		else {
			console.log("We are connected");
		}
		
		
		var collection = db.collection('tablet');
		
		var data;
		
		collection.find({"Name":"Ipad"}).toArray(function(err, items) {
			console.log("Item ::::" +items);
			
			res.render('ipad',{data : items});
		});
		console.log("Item data::::" +data);
		
	});
	
};
exports.lenovo = function(req, res){
	var MongoClient = require('mongodb').MongoClient;

	// Connect to the db
	MongoClient.connect("mongodb://localhost:27017/eCommerce", function(err, db) {
		if(err) {
			return console.dir(err);
		}
		else {
			console.log("We are connected");
		}
		
		
		var collection = db.collection('tablet');
		
		var data;
		
		collection.find({"Name":"Lenovo"}).toArray(function(err, items) {
			console.log("Item ::::" +items);
			
			res.render('lenovo',{data : items});
		});
		console.log("Item data::::" +data);
		
	});
	
};
exports.nexus7 = function(req, res){
	var MongoClient = require('mongodb').MongoClient;

	// Connect to the db
	MongoClient.connect("mongodb://localhost:27017/eCommerce", function(err, db) {
		if(err) {
			return console.dir(err);
		}
		else {
			console.log("We are connected");
		}
		
		
		var collection = db.collection('tablet');
		
		var data;
		
		collection.find({"Name":"Nexus 7"}).toArray(function(err, items) {
			console.log("Item ::::" +items);
			
			res.render('nexus7',{data : items});
		});
		console.log("Item data::::" +data);
		
	});
	
};
exports.tab4 = function(req, res){
	var MongoClient = require('mongodb').MongoClient;

	// Connect to the db
	MongoClient.connect("mongodb://localhost:27017/eCommerce", function(err, db) {
		if(err) {
			return console.dir(err);
		}
		else {
			console.log("We are connected");
		}
		
		
		var collection = db.collection('tablet');
		
		var data;
		
		collection.find({"Name":"Samsung Tab4"}).toArray(function(err, items) {
			console.log("Item ::::" +items);
			
			res.render('tab4',{data : items});
		});
		console.log("Item data::::" +data);
		
	});
	
};
exports.iphone = function(req, res){
	var MongoClient = require('mongodb').MongoClient;

	// Connect to the db
	MongoClient.connect("mongodb://localhost:27017/eCommerce", function(err, db) {
		if(err) {
			return console.dir(err);
		}
		else {
			console.log("We are connected");
		}
		
		
		var collection = db.collection('phone');
		
		var data;
		
		collection.find({"Name":"Iphone 6"}).toArray(function(err, items) {
			console.log("Item ::::" +items);
			
			res.render('iphone',{data : items});
		});
		console.log("Item data::::" +data);
		
	});
	
};
exports.nexus5 = function(req, res){
	var MongoClient = require('mongodb').MongoClient;

	// Connect to the db
	MongoClient.connect("mongodb://localhost:27017/eCommerce", function(err, db) {
		if(err) {
			return console.dir(err);
		}
		else {
			console.log("We are connected");
		}
		
		
		var collection = db.collection('phone');
		
		var data;
		
		collection.find({"Name":"Nexus 5"}).toArray(function(err, items) {
			console.log("Item ::::" +items);
			
			res.render('nexus5',{data : items});
		});
		console.log("Item data::::" +data);
		
	});
	
};
exports.s5 = function(req, res){
	var MongoClient = require('mongodb').MongoClient;

	// Connect to the db
	MongoClient.connect("mongodb://localhost:27017/eCommerce", function(err, db) {
		if(err) {
			return console.dir(err);
		}
		else {
			console.log("We are connected");
		}
		
		
		var collection = db.collection('phone');
		
		var data;
		
		collection.find({"Name":"Samsung S5"}).toArray(function(err, items) {
			console.log("Item ::::" +items);
			
			res.render('s5',{data : items});
		});
		console.log("Item data::::" +data);
		
	});
	
};
exports.motox = function(req, res){
	var MongoClient = require('mongodb').MongoClient;

	// Connect to the db
	MongoClient.connect("mongodb://localhost:27017/eCommerce", function(err, db) {
		if(err) {
			return console.dir(err);
		}
		else {
			console.log("We are connected");
		}
		
		
		var collection = db.collection('phone');
		
		var data;
		
		collection.find({"Name":"MotoX"}).toArray(function(err, items) {
			console.log("Item ::::" +items);
			
			res.render('motox',{data : items});
		});
		console.log("Item data::::" +data);
		
	});
	
};
				