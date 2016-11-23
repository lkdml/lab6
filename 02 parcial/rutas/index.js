express = require('express');
router = express.Router({mergedparams : false});//{mergedparams : false}


//3. Alta de una mascota
router.post('/mascotas/nueva',function(req,res){
    req.db
    .insert(req.body,function(e){
        if (e)
            console.log(e);
    })
    res.send("Se inserto correctamente");
});



//4.a listo todas las mascotas
router.get('/mascotas',function(req,res){
	req.db
    .find()
    .toArray((err, data) => {
        res.json(data);
    });
});

//4.b listo todas las mascotas de una raza especìfica
router.get('/mascotas/:raza',function(req,res){
    console.log(req.params.raza);
	    req.db
    .find({raza:req.params.raza})
    .toArray((err, data) => {
        res.json(data);
    });
});


//4.c Las mascotas mayores a la edad especificada
router.all('/mascotas/mayor/:edad',function(req,res){
    req.db
    .find({edad:{$gte:(req.params.edad)}})
    .toArray((err, data) => {
        res.json(data);
    });
});

//4.d listo los perros con menor peso al indicado
router.all('/mascotas/perros/menor/:peso',function(req,res){
     req.db
    .find({peso:{$lte:parseInt(req.params.peso)}})
    .toArray((err, data) => {
        res.json(data);
    });
});

//4.e Listo todas las mascotas del dueño
router.get('/mascotas/duenio/:nombre',function(req,res){
		req.db
	.aggregate( [ { $match : { "duenio.nombre" : req.params.nombre }
				} ] )
    
    .toArray((err, data) => {
        res.json(data);
    });
});

//i. la descarga del archivo
router.get('/perros',function(req,res){
	res.download('perros.pdf','perros.pdf')
});


module.exports = router;


