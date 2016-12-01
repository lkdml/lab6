var express = require('express');
var router = express.Router({mergedparams : true});

var productos = require('./productos');
var mascotas = require('./mascotas');

router.use('/productos', productos);
router.use('/mascotas', mascotas);


module.exports = router;