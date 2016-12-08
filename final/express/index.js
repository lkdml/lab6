var MongoClient = require( 'mongodb' ).MongoClient;
var ObjectID = require('mongodb').ObjectID;
var express = require('express');
var app = express();
var rutas = require('./rutas');
var bodyParser = require('body-parser');



app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use((req,res,next)=>{
	console.log(Date());
	next();
});

app.use(function(req,res,next){
	console.log(Date());
	next();
});

MongoClient.connect('mongodb://localhost:27017/bdFinal', function(err, db) {
  if (err)
        throw err;
    app.use((req, res, next) => {
        req.db = db;
				req.ObjectID=ObjectID;
        next();
    });

    db.collection('alumnos').dropIndexes();
    db.collection('alumnos').createIndex({"nombre":"text","apellido":"text","notas":"text","legajo":"text"}, 
    	{weight:{"apellido":10,"nombre":5,"legajo":4,"notas":2}});
    db.collection('materias').dropIndexes();	
    db.collection('materias').createIndex({"nombre":"text","descripcion":"text"}, {weight:{"nombre":10,"descripcion":5}});


	app.use('/',rutas);
	//como es async , lo hago aca
	app.listen(3000,function(){
		console.log('Servidor funcionando en el puerto 3000')
	});
});
