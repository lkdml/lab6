express = require('express');
router = express.Router({mergedparams : true});

productos = require('./productos');
mascotas = require('./mascotas');

router.use('/productos', productos);
router.use('/mascotas', mascotas);


module.exports = router;