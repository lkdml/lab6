
var express = require('express');
var app = express(); // en app vamos a tener toda la aplicacion que hagamos

//app.METHOD(PATH,HANDLER)
/* donde :
app es una instancia de express
METHOD es el metodo de solicitud HTTP
PATH es una via de acceso a un servidor Ej: usuarios lo que seria despues del url/
HANDLER es una funcion que se ejecuta cuando se correlaciona la ruta 
	esta tiene 3 parametros
	req
	res
	next es para que continue la app.. si no lo ponemos es el utlimo metodo q se ejecuta
*/
app.get('/', function (req,res){
	res.send('Hola Mundo');
});

app.post('/',function (req,res){
	res.send('POST request to de home page');
});

app.get('/example/b',function (req,res,next){
	console.log("entramos al primer handler con el parametro next, hacemos que pase al siguiente");
	next();//esto se utiliza para decirle al app que debe seguir ejecutando la siguiente funcioon hasta encontra un res.send
},function (req,res){
	res.send('aca termina');
});

app.all('/secret',function (rea,res,next){
	console.log("accedemos a todos los metodos por la misma manera");
	res.send("shhh secreto");
});

var cb0 = function (req,res,next){
	console.log("la forma de mandar");
	next();
};
var cb1 = function (req,res,next){
	console.log("diferentes funciones y..");
	next();
};
var cb2 = function (req,res,next){
	res.send("organizar mejor");
};

/*
los metodos de respuesta son entre otros
.download para la descarga de un archivo en el cliente
.end    no devuelve nada pero termina la app
.json   para devolver un objeto formateado en json
.send   es lo que se usa para escribir
.redirect
.render
.send
.sendfile

*/

//el rute nos permite ahorar en codigo y evitamos el primer parametro en el resto.
app.route('/book')
 .get(function(req,res){
 	res.send("algo");
 })
  .post(function(req,res){
 	res.send("algo");
 })
  .put(function(req,res){
 	res.send("algo");
 });


 // para recibir parametros por get
 app.get('/user/:id', function (req,res){
	res.send('el ID es:'+req.params.id);
});


 // para recibir parametros por post usamos bodi-parser
 //npm install --save body-parser
 var bodyParser = require('body-parser');
 //esto lo usamos para hacer que cada vez que se ejecute app y un metodo, antes se cargue o ejecute el bodyparser
 app.use(bodyParser.urlencoded({extended:false}));
 app.use(bodyParser.json());

 app.post('/user1', function (req,res){
	res.send('el ID es:'+req.body.id);
});

 /*
las funciones de midelware (el use q usamos antes).
las funciones tiene aceso a las tres funciones o elementos (req,res,next). de esta forma podemos 
ejecutar cualquier codigo
realizar cambios en la solicitud y los objetos de respueta
finalizar el ciclo de solicitud/respuiesta
invocar el siguiente middleware
 */
//aca uso un middleware propio.
 var miLoger = function(req,res,next){
 	console.log('loged');
 	next();
 }
 app.use(miLoger);

 app.get('/loger',function(req,res){
 	res.send("algo");
 })


 //midleware incorporado: static. esto nos muestra archivos estaticos.. ejemplo un html
 app.use('/miApp',express.static('./public')); //esto hace un redireccionamiento de url en donde podemos pasar archivos estaticos, para si accedemos a /miApp, veremos el contenido de public

 //midleware a nivel de direccionador
 // es similar a la de aplicacion, pero esta enlazado a una instancia de express.Router().
var express = require('express');
var router = express.Router();

 router.get('/user/:id', function (req,res){
	res.send('el ID es:'+req.params.id);
});

app.get('/anidado',[cb0,cb1,cb2]);
//esto es para que el servidor este escuchando en este puerto cuando se ejecuta y permanzca asi..
app.listen(3000,function(){
	console.log('app running');
})

