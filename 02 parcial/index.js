var MongoClient = require( 'mongodb' ).MongoClient;
var express = require('express');
var app = express();
var rutas = require('./rutas/index.js');
var bodyParser = require('body-parser');
var rutaIndex = require('./rutas/indices.js');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


// punto 6, muestro por consola la hora
app.use(function(req,res,next){
	console.log(Date());
	next();
});

MongoClient.connect('mongodb://localhost:27017/mascotas', function(err, db) {
  if (err)
        throw err;
    app.use((req, res, next) => {
        req.db = db.collection('mascota');
        next();
    });
	app.use('/',rutas);
	app.use('/indice',rutaIndex);
	app.listen(3000,function(){
		console.log('Servidor funcionando en el puerto 3000')
	});
});

