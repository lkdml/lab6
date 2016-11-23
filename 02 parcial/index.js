












































































































var MongoClient = require( 'mongodb' ).MongoClient;
var express = require('express');
var app = express();
var rutas = require('./rutas');
var bodyParser = require('body-parser');
var rutaIndex = require('./rutas/indices.js');











































































//app.use(bodyParser.urlencoded({extended:false}));
//app.use(bodyParser.json());

/*app.use((req,res,next)=>{
	console.log(Date());
	next();
});
*/
app.use(function(req,res,next){
	console.log(Date());
	next();
});









































































MongoClient.connect('mongodb://localhost:27017/bdFerreteria', function(err, db) {
  if (err)
        throw err;
    app.use((req, res, next) => {
        req.db = db.collection('productos');
        next();
    });
	app.use('/',rutas);
	app.use('/indice',rutaIndex);


	//como es async , lo hago aca
	app.listen(3000,function(){
		console.log('Servidor funcionando en el puerto 3000')
	});
});

