//como pre-requisito, para trabajar con node, tenemos que crear nuestro archivo package.json. para eso ejecutamos
//npm init
//var http = require('http'); //esta es la manera en la cual se incluyen modulos //aca va a buscar en la carpeta node_modules //de esta forma cargamos modulos nativos.
var miModulo = require('./modulo'); //esta es la forma de llamar a un modulo propio o ubicado en la carpeta 
console.log(miModulo);

var express = require('express');
var ej = express();

//EJERCICIOS EXPRESS
//1. Crear un método GET para la vía de acceso “/”, que devuelva “Hola Express”.
ej.get('/',function (req,res,next){
	res.send("Hola Mundo");
});
//2. Crear la vía de acceso “/usuario“ para los métodos GET y POST y que devuelvan “método GET” o “método POST”, según el caso.
ej.route('/usuario')
	.get(function (req,res,next){res.send("metodo GET");})
	.post(function (req,res,next){res.send("metodo POST");})
	;
//3. Crear la vía de acceso “/user” para los métodos GET, POST, PUT y DELETE.
ej.route('/user')
	.get(function (req,res,next){res.send("metodo GET");})
	.post(function (req,res,next){res.send("metodo POST");})
	.put(function (req,res,next){res.send("metodo POST");})
	.delete(function (req,res,next){res.send("metodo POST");});
//4. Crear la vía de acceso “/user” para el método GET, con dos manejadores, uno que devuelva “manejador 1” y el otro “manejador 2”.
ej.get('/user2',function (req,res,next){
		console.log('manejador1');
		next();
	},
	function (req,res,next){
		console.log('manejador2');
		res.send("metodo GET");
	});
ej.post('/user2',function (req,res,next){
		console.log('manejador1');
		next();
	},
	function (req,res,next){
		console.log('manejador2');res.send("POST");
	});
//5. Crear cuatro manejadores para la vía “/rutas”, metodo POST y agregarlos en una matriz de funciones.
var r1 = function (req,res,next){
	console.log("esta es r1");
	next();
};
var r2 = function (req,res,next){
	console.log("esta es r2");
	next();
};
var r3 = function (req,res,next){
	console.log("esta es r3");
	next();
};
var r4 = function (req,res,next){
	console.log("esta es r4");
	res.end();
};
ej.post('/rutas',[r1,r2,r3,r4]);
//6. Crea la via “/usuario” para el método GET que reciba un parámetro con el nombre y devuelva “hola (nombre ingresado)”.
ej.route('/usuario/:usuario')
	.get(function (req,res,next){res.send("el usuario es"+req.params.usuario);})
//7. Crear las vías “/user”, “/user/id” y “/users” para el método que elija, y que devuelvan por consola la fecha.
var miMidel = function(req,res,next){
	req.hora = Date.now();
	console.log(req.hora);
	next();
}
ej.use(miMidel);
ej.get('/user7',function (req,res,next){res.send('mira la consola');});
ej.get('/user7/:id',function (req,res,next){res.send('mira la consola'+req.params.id);});
ej.get('/users',function (req,res,next){res.send('mira la consola');});
//8. Crear el módulo “operaciones” que contenga los métodos: 
//a. iBrutos: Devuelve el 3% del importe ingresado.
//b. Iva: Devuelve el 21% del importe.
//c. importeTotal: Le suma el iva al importe.
//9. Crear las vías “/iva”, “/importeTotal” y “/brutos” para el método GET y calcular los importes usando el módulo “operaciones”.
var operaciones = require('./operaciones');
console.log(operaciones);
ej.get('/iva/:valor',function (req,res,next){res.json(operaciones.iva(req.params.valor));});
ej.get('/importeTotal/:valor',function (req,res,next){res.json(operaciones.importeTotal(req.params.valor));});
ej.get('/brutos/:valor',function (req,res,next){res.json(operaciones.iBrutos(req.params.valor));});
//Devolver los datos en formato JSON.
//10. Crear la via “/download” para el método GET que nos descargue una imagen.
ej.get('/download',function (req,res,next){res.download('./public_html/index.html','index.txt');});

//11. Crear una página web en una carpeta de nombre “app”, y que se pueda acceder desde “localhost:3000/web”.
 ej.use('/web',express.static('./public_html'));


//12. Crear un módulo de nombre “rutas” que maneje los métodos PUT y POST de la vía de acceso “/usuarios” y agregarlo como middleware de la aplicación.
var rutas = require('./rutas');
ej.use(rutas);



ej.listen(3000,function(){
	console.log('app running');
})
