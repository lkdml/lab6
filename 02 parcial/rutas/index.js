








































































express = require('express');

router = express.Router();//{mergedparams : false}










































































//“/productos”, método GET que devuelve todos los productos.
router.get('/productos',function(req,res){
	req.db
    .find()
    .toArray((err, data) => {
        res.json(data);
    });
});





































//b. “/productos/marca/{marca}” método GET. Devuelve todos los productos de la marca indicada.
router.get('/productos/marca/:marca',function(req,res){
	    req.db
    .find({marca:req.params.marca})
    .toArray((err, data) => {
        res.json(data);
    });
});





































//c. “/productos/precio/mayor/{precio}” de cualquier método que devuelva los productos con precio mayor al indicado.
router.all('/productos/precio/mayor/:precio',function(req,res){
	console.log(req.params.precio);
	req.db
    .find({precio:{$gte:parseInt(req.params.precio)}})
    .toArray((err, data) => {
        res.json(data);
    });
});





































//d. “/productos/stock/menor/{cantidad}” de cualquier método que devuelva los productos con stock menor al indicado.
router.all('/productos/stock/menor/:cantidad',function(req,res){
	 req.db
    .find({Stock:{$lte:parseInt(req.params.cantidad)}})
    .toArray((err, data) => {
        res.json(data);
    });
});





































//e. “/productos/cargar” método POST. Carga el objeto “producto” enviado.
router.post('/productos/cargar',function(req,res){
	req.db
    .insert(req.body,function(e){
		if (e)
			console.log(e);
	})
	res.send("Se inserto correctamente");
});









































































//f. “/categorías” de cualquier método que devuelve un listado de categorías. 
router.all('/categorias',function(req,res){
	req.db
	.aggregate( [ {  $group : { _id : "$categoria" } 
				} ] )
    
    .toArray((err, data) => {
        res.json(data);
    });
});






















































//g. “/categorías/{categoria}” devuelve todos los productos de la categoría indicada. 
router.get('/categorias/:categoria',function(req,res){
		req.db
	.aggregate( [ { $match : { "categoria.nombre" : req.params.categoria }
				} ] )
    
    .toArray((err, data) => {
        res.json(data);
    });
});






















































//i. Crear la via “/catalogo” para el método GET que nos descargue un archivo con el catálogo de productos. 
router.get('/catalogo',function(req,res){
	res.download('Catalogo Ferreteria.pdf','Catalogo.pdf')
});

router.get('/indice',function(req,res){

    req.db.createIndex({nombre:"text",
					marca:"text",
					descripcion:"text"},
					{weight:{nombre:10,
							marca:5,
							descripcion:2}})
    res.send("Indices de la BD creados correctamente");
});


router.get('/indice/:indice',function(req,res){
    req.db.find({$text:{$search:req.params.indice}}) 
    .toArray((err, data) => {
        res.json(data);
    });
});






































module.exports = router;