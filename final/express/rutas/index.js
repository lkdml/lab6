var express = require('express');
var router = express.Router({mergedparams : true});

var productos = require('./alumnos');
var mascotas = require('./materias');

router.use('/alumnos', productos);
router.use('/materias', mascotas);


module.exports = router;