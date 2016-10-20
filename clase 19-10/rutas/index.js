//12. Crear un módulo de nombre “rutas” que maneje los métodos PUT y POST de la vía de acceso “/usuarios” y
// agregarlo como middleware de la aplicación.

var express = require('express');
var rutas = express.Router();

rutas
	.post('/usuarios',function(req,res,next){console.log("paso por el router con POST");res.send("pase");})
	.put('/usuarios',function(req,res,next){console.log("paso por el router con POST");res.send("pase");});

module.exports = rutas;